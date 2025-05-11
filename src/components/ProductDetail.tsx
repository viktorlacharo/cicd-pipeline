'use client';

import { FC } from 'react';
import { Product } from '@/data/products';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/hooks/useCart';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  showQuantity?: boolean;
}

const ProductDetail: FC<ProductDetailProps> = ({
  product,
  showQuantity = true
}) => {
  const { 
    quantity, 
    setQuantity, 
    addToCart, 
    isInCart, 
    cartItem,
    updateItemQuantity,
    openCart
  } = useCart(product);

  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full"
        />
        {product.isSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            SALE
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            NEW
          </span>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-medium truncate">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-bold">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        {isInCart ? (
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center border rounded">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => updateItemQuantity(cartItem!.quantity - 1)}
                >
                  <Minus size={16} />
                </Button>
                <span className="w-8 text-center">{cartItem!.quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => updateItemQuantity(cartItem!.quantity + 1)}
                >
                  <Plus size={16} />
                </Button>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={openCart}
              >
                View Cart
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 w-full">
            {showQuantity && (
              <div className="flex items-center border rounded self-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-8 px-2"
                >
                  <Minus size={16} />
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-8 px-2"
                >
                  <Plus size={16} />
                </Button>
              </div>
            )}
            
            <Button 
              className="w-full" 
              onClick={() => addToCart()}
            >
              <ShoppingCart size={16} className="mr-2" />
              Add to Cart
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductDetail;
