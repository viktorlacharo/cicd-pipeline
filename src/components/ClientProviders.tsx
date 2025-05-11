'use client';

import { FC, ReactNode } from 'react';
import CartProvider from '@/features/ShopingCart/context/CartProvider';
import { Toaster } from 'sonner';

interface ClientProvidersProps {
  children: ReactNode;
}

// Wraps client-side providers that need to be used across the app
export const ClientProviders: FC<ClientProvidersProps> = ({ children }) => {
  return (
    <CartProvider>
      {children}
      <Toaster position="top-right" />
    </CartProvider>
  );
};

export default ClientProviders;
