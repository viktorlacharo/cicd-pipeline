'use client';

import { FC, useEffect } from 'react';
import { useCartStore } from '@/store/useCartStore';

/**
 * Initializes client-side stores on first render
 * This helps with hydration and ensuring stores are ready to use
 */
const StoreInitializer: FC = () => {
  useEffect(() => {
    // Hydrate the cart store from localStorage
    useCartStore.persist.rehydrate();
  }, []);

  return null; // This component doesn't render anything
};

export default StoreInitializer;