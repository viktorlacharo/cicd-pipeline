import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Check } from 'lucide-react';
import { Product } from '@/data/products';
import useShoppingCart from '@/hooks/useShoppingCart';
import { useState } from 'react';

interface AddToCartButtonProps {
  product: Product;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  showQuantity?: boolean;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({
  product,
  variant = 'default',
  size = 'default',
  showQuantity = false
}) => {
  const { addItem, items } = useShoppingCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  
  // Check if product is already in cart
  const existingItem = items.find(item => item.id === product.id);
  const isInCart = Boolean(existingItem);

  const handleAddToCart = () => {
    addItem(product, quantity);
    
    // Show success feedback
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex items-center gap-2">
      {showQuantity && (
        <div className="flex items-center border rounded">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="h-8 px-2"
          >
            -
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setQuantity(quantity + 1)}
            className="h-8 px-2"
          >
            +
          </Button>
        </div>
      )}
      
      <Button
        variant={variant}
        size={size}
        onClick={handleAddToCart}
        className={added ? 'bg-green-600 hover:bg-green-700' : ''}
      >
        {added ? (
          <span className="flex items-center gap-1">
            <Check size={16} /> Added
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <Plus size={16} />
            {isInCart ? 'Add More' : 'Add to Cart'}
          </span>
        )}
      </Button>
    </div>
  );
};

export default AddToCartButton;