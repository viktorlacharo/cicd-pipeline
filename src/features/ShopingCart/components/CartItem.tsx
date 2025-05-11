import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash } from 'lucide-react';
import { CartItem as CartItemType } from '@/store/useCartStore';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem: FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove
}) => {
  const { id, product, quantity } = item;
  
  return (
    <li className="flex flex-col md:flex-row items-start md:items-center gap-4 py-4">
      <Link href={`/product/${id}`} className="block">
        <div className="h-20 w-20 bg-muted rounded overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
      
      <div className="flex-1">
        <Link href={`/product/${id}`} className="block">
          <h4 className="font-medium hover:text-primary">{product.name}</h4>
        </Link>
        <p className="text-sm text-muted-foreground">
          {formatPrice(product.price)} each
        </p>
        {product.originalPrice && (
          <p className="text-xs text-muted-foreground line-through">
            Was {formatPrice(product.originalPrice)}
          </p>
        )}
      </div>
      
      <div className="flex items-center border rounded">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => onUpdateQuantity(id, quantity - 1)}
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </Button>
        <span className="w-8 text-center">{quantity}</span>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => onUpdateQuantity(id, quantity + 1)}
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </Button>
      </div>
      
      <div className="text-right min-w-[80px]">
        <div className="font-medium">
          {formatPrice(product.price * quantity)}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="mt-1 text-muted-foreground hover:text-destructive"
          onClick={() => onRemove(id)}
          aria-label="Remove item"
        >
          <Trash size={16} />
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
