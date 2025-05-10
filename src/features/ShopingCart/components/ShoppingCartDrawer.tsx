import { type FC } from "react";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";

const ShoppingCartDrawer: FC = ({}) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerTitle>Shopping Cart</DrawerTitle>
        {children}
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCartDrawer;
