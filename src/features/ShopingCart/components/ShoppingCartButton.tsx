import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import ShoppingCartDrawer from "./ShoppingCartDrawer";
import { Badge } from "@/components/ui/badge";
import useShoppingCart from "@/hooks/useShoppingCart";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ShoppingCartButtonProps {
  children?: React.ReactNode;
}

const ShoppingCartButton: FC<ShoppingCartButtonProps> = ({
  children
}) => {
  const { cartOpen, setCartOpen, itemCount } = useShoppingCart();
  const isMobile = useIsMobile();
  const pathname = usePathname();
  
  // Don't show the drawer on the cart page
  const isCartPage = pathname === "/cart";

  const handleCartClick = () => {
    if (isCartPage) return;
    setCartOpen(true);
  };

  return (
    <>
      {isCartPage ? (
        <Link href="/cart">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
          >
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <Badge 
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0"
              >
                {itemCount > 99 ? '99+' : itemCount}
              </Badge>
            )}
          </Button>
        </Link>
      ) : (
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative"
          onClick={handleCartClick}
        >
          <ShoppingCart size={24} />
          {itemCount > 0 && (
            <Badge 
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0"
            >
              {itemCount > 99 ? '99+' : itemCount}
            </Badge>
          )}
        </Button>
      )}
      
      {!isCartPage && (
        <ShoppingCartDrawer 
          open={cartOpen}
          onOpenChange={setCartOpen}
        >
          {children}
        </ShoppingCartDrawer>
      )}
    </>
  );
};

export default ShoppingCartButton;
