import { Metadata } from 'next';
import CheckoutClientPage from '@/features/ShopingCart/components/CheckoutClientPage';
import ClientProviders from '@/components/ClientProviders';

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Complete your purchase',
};

export default function CheckoutPage() {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <ClientProviders>
          <CheckoutClientPage />
        </ClientProviders>
      </div>
    </div>
  );
}
