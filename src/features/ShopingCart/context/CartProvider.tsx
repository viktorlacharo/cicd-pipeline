import { FC, ReactNode, useEffect } from 'react';
import { useCartStore } from '@/store/useCartStore';

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const { loadServerCart } = useCartStore();

  useEffect(() => {
    // Handle hydration on client side
    useCartStore.persist.rehydrate();
    
    // Load cart from server on mount
    loadServerCart();

    // Set up window beforeunload handler to sync cart if needed
    const handleBeforeUnload = () => {
      const { needsSync, syncWithServer } = useCartStore.getState();
      if (needsSync) {
        // Try to sync before page unloads
        syncWithServer();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <>{children}</>;
};

export default CartProvider;
