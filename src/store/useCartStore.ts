import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  lastSynced: number | null;
  isLoading: boolean;
  needsSync: boolean;
  cartOpen: boolean;
};

type CartActions = {
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  markSynced: () => void;
  markNeedsSync: () => void;
  setIsLoading: (isLoading: boolean) => void;
  setCartOpen: (open: boolean) => void;
  syncWithServer: () => Promise<void>;
  loadServerCart: () => Promise<void>;
};

export const useCartStore = create<CartState & CartActions>()(
  persist(
    (set, get) => ({
      items: [],
      lastSynced: null,
      isLoading: false,
      needsSync: false,
      cartOpen: false,

      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.id === product.id
          );

          if (existingItemIndex !== -1) {
            // If item exists, update quantity
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += quantity;
            
            return {
              items: updatedItems,
              needsSync: true
            };
          } else {
            // Add new item
            return {
              items: [
                ...state.items,
                { id: product.id, product, quantity }
              ],
              needsSync: true
            };
          }
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
          needsSync: true
        }));
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) => 
            item.id === productId ? { ...item, quantity } : item
          ),
          needsSync: true
        }));
      },

      clearCart: () => {
        set({
          items: [],
          needsSync: true
        });
      },

      markSynced: () => {
        set({
          lastSynced: Date.now(),
          needsSync: false
        });
      },

      markNeedsSync: () => {
        set({ needsSync: true });
      },

      setIsLoading: (isLoading) => {
        set({ isLoading });
      },

      setCartOpen: (open) => {
        set({ cartOpen: open });
      },

      syncWithServer: async () => {
        const { items, needsSync } = get();
        
        // Only sync if needed
        if (!needsSync || items.length === 0) return;
        
        try {
          get().setIsLoading(true);
          
          const response = await fetch('/api/cart/sync', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              items: items.map(item => ({
                productId: item.id,
                quantity: item.quantity
              })) 
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to sync cart with server');
          }

          const data = await response.json();
          
          // Update cart with server response (prices, availability, etc.)
          // This would merge server data with client data
          // For now we'll just mark it as synced
          
          get().markSynced();
        } catch (error) {
          console.error('Error syncing cart with server:', error);
        } finally {
          get().setIsLoading(false);
        }
      },

      loadServerCart: async () => {
        try {
          get().setIsLoading(true);
          
          const response = await fetch('/api/cart', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error('Failed to load cart from server');
          }

          const data = await response.json();
          
          // Handle merging with local cart based on your business logic
          // For this example, we'll use server data if it exists
          if (data.items && data.items.length > 0) {
            set({ items: data.items });
          }
          
          get().markSynced();
        } catch (error) {
          console.error('Error loading cart from server:', error);
        } finally {
          get().setIsLoading(false);
        }
      }
    }),
    {
      name: 'shopping-cart', // name of the item in localStorage
      skipHydration: true, // we'll handle hydration manually in the hook
    }
  )
);