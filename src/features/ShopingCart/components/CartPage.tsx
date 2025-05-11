'use client';

import { FC } from 'react';
import useShoppingCart from '@/hooks/useShoppingCart';
import { Button } from '@/components/ui/button';
import CartItem from '@/features/ShopingCart/components/CartItem';
import CartSummary from '@/features/ShopingCart/components/CartSummary';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const CartPage: FC = () => {
  const { 
    items, 
    cartTotal, 
    isLoading,
    itemCount,
    removeItem,
    updateQuantity
  } = useShoppingCart();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <ShoppingBag size={24} /> Shopping Cart
          {itemCount > 0 && <span className="text-muted-foreground">({itemCount} items)</span>}
        </h1>
        <Link href="/shop">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Continue Shopping
          </Button>
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 bg-muted/30 rounded-lg">
          <ShoppingBag size={48} className="mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Link href="/shop">
            <Button>Start Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="hidden md:grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-muted-foreground">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <ul className="divide-y">
                {items.map((item) => (
                  <div key={item.id} className="py-4">
                    <CartItem 
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  </div>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <CartSummary 
              showCheckoutButton={true}
              showClearButton={true}
              className="sticky top-8"
            />

            <div className="mt-6 bg-muted/30 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-2">Our customer service is available 24/7</p>
              <Button variant="outline" size="sm" className="w-full">Contact Support</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
