'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import CartSummary from '@/features/ShopingCart/components/CartSummary';
import useShoppingCart from '@/hooks/useShoppingCart';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CheckoutClientPage: FC = () => {
  const { items, itemCount } = useShoppingCart();
  const router = useRouter();
  
  // Redirect if cart is empty
  if (items.length === 0) {
    return (
      <div className="text-center py-16 bg-muted/30 rounded-lg">
        <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">You need to add items to your cart before checkout.</p>
        <Link href="/shop">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Checkout ({itemCount} items)</h1>
        <Link href="/cart">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Cart
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-medium mb-6">Shipping Information</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full p-2 border rounded" 
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  placeholder="Street Address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">State</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    placeholder="State"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">ZIP Code</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    placeholder="ZIP Code"
                  />
                </div>
              </div>
            </form>

            <h2 className="text-xl font-medium mt-8 mb-6">Payment Information</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Card Number</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  placeholder="•••• •••• •••• ••••"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">Expiration Date</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CVV</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded" 
                    placeholder="CVV"
                  />
                </div>
              </div>
            </form>
            
            <div className="mt-8">
              <Button className="w-full">Place Order</Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <CartSummary 
            showCheckoutButton={false}
            showClearButton={false}
          />
          
          <div className="mt-6 bg-muted/30 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Order Note</h3>
            <textarea 
              className="w-full p-2 border rounded h-24" 
              placeholder="Any special instructions for your order?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutClientPage;
