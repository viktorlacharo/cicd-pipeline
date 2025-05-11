import { useEffect, useRef } from 'react';
import { useCartStore } from '@/store/useCartStore';

// Debounce time in milliseconds
const SYNC_DEBOUNCE_TIME = 5000; // 5 seconds

export const useShoppingCart = () => {
  const {
    items,
    isLoading,
    cartOpen,
    needsSync,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    setCartOpen,
    syncWithServer,
    loadServerCart
  } = useCartStore();

  const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Calculate cart totals
  const cartTotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  // Handle hydration when component mounts
  useEffect(() => {
    // This runs only on client-side
    useCartStore.persist.rehydrate();
    
    // Load the server-side cart when the component mounts
    loadServerCart();

    // Add event listeners for page navigation/close
    const handleBeforeUnload = () => {
      if (needsSync) {
        syncWithServer();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      
      // Clear any pending sync timeout
      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
      }
    };
  }, []);

  // Set up debounced sync with server whenever cart changes
  useEffect(() => {
    if (needsSync) {
      // Clear previous timeout if it exists
      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
      }
      
      // Set a new timeout
      syncTimeoutRef.current = setTimeout(() => {
        syncWithServer();
      }, SYNC_DEBOUNCE_TIME);
    }
    
    return () => {
      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
      }
    };
  }, [needsSync, items]);

  return {
    items,
    isLoading,
    cartOpen,
    cartTotal,
    itemCount,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    setCartOpen
  };
};

export default useShoppingCart;