import { type FC } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import ShoppingCartDrawer from "./ShoppingCartDrawer";

interface ShoppingCartButtonProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const ShoppingCartButton: FC<ShoppingCartButtonProps> = ({
  children,
  open = false,
  onOpenChange,
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <ShoppingCartDrawer />
    );
  }

  return <div>ShoppingCartButton</div>;
};

export default ShoppingCartButton;
