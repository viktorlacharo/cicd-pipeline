import { type FC } from "react";
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import useShoppingCart from "@/hooks/useShoppingCart";
import { X, ShoppingBag } from "lucide-react";
import CartItem from "./CartItem";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

interface ShoppingCartDrawerProps {
  children?: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ShoppingCartDrawer: FC<ShoppingCartDrawerProps> = ({
  children,
  open,
  onOpenChange,
}) => {
  const { 
    items, 
    cartTotal, 
    isLoading,
    itemCount,
    removeItem,
    updateQuantity
  } = useShoppingCart();

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag size={20} />
            Your Shopping Cart 
            {itemCount > 0 && <span className="text-muted-foreground">({itemCount})</span>}
          </DrawerTitle>
          <DrawerClose className="absolute right-4 top-4">
            <X size={24} />
          </DrawerClose>
        </DrawerHeader>
        
        <div className="p-4 overflow-y-auto max-h-[60vh]">
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <CartItem 
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </ul>
          )}
        </div>
          <DrawerFooter className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">Subtotal:</span>
            <span className="font-bold text-lg">{formatPrice(cartTotal)}</span>
          </div>
          
          <Button 
            className="w-full" 
            disabled={items.length === 0 || isLoading}
            asChild
          >
            <Link href="/checkout">Proceed to Checkout</Link>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full mt-2"
            asChild
          >
            <Link href="/cart">View Cart</Link>
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full mt-2" 
            onClick={() => onOpenChange(false)}
          >
            Continue Shopping
          </Button>
          
          {items.length > 0 && (
            <p className="text-xs text-center text-muted-foreground mt-4">
              Taxes and shipping calculated at checkout
            </p>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCartDrawer;
