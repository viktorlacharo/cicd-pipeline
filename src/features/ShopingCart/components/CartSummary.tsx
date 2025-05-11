'use client';

import { FC } from 'react';
import useShoppingCart from '@/hooks/useShoppingCart';
import { formatPrice } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ShoppingBag, Trash } from 'lucide-react';

interface CartSummaryProps {
  showCheckoutButton?: boolean;
  showClearButton?: boolean;
  className?: string;
  onCheckoutClick?: () => void;
}

const CartSummary: FC<CartSummaryProps> = ({
  showCheckoutButton = true,
  showClearButton = true,
  className = '',
  onCheckoutClick
}) => {
  const { items, cartTotal, itemCount, clearCart, setCartOpen } = useShoppingCart();
  
  const handleCheckout = () => {
    if (onCheckoutClick) {
      onCheckoutClick();
    } else {
      // Default checkout behavior - could navigate to checkout page
      console.log('Proceeding to checkout');
    }
  };
  
  return (
    <Card className={`${className} w-full`}>
      <CardContent className="p-4">
        <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
          <ShoppingBag size={18} /> Order Summary
        </h3>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Items ({itemCount})</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span>Calculated at checkout</span>
          </div>
          
          <div className="border-t my-4 pt-4"></div>
          
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        {items.length === 0 && (
          <div className="text-center text-muted-foreground py-2">
            Your cart is empty
          </div>
        )}
        
        {showCheckoutButton && (
          <Button 
            className="w-full" 
            disabled={items.length === 0}
            onClick={handleCheckout}
          >
            <ShoppingBag size={16} className="mr-2" />
            Checkout
          </Button>
        )}
        
        {showClearButton && items.length > 0 && (
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={clearCart}
          >
            <Trash size={16} className="mr-2" />
            Clear Cart
          </Button>
        )}
        
        <Button
          variant="ghost"
          className="w-full"
          onClick={() => setCartOpen(true)}
        >
          <ShoppingCart size={16} className="mr-2" />
          View Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartSummary;
