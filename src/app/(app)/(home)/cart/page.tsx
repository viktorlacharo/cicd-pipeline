import { Metadata } from 'next';
import CartPage from '@/features/ShopingCart/components/CartPage';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Review and manage items in your shopping cart',
};

export default function Page() {
  return (
    <div className="pt-12 pb-24">
      <CartPage />
    </div>
  );
}
