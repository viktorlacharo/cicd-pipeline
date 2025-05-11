'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/data/products';
import { toast } from 'sonner';
import useShoppingCart from './useShoppingCart';

export const useCart = (product?: Product) => {
  const { 
    items, 
    addItem, 
    removeItem, 
    updateQuantity,
    clearCart,
    setCartOpen
  } = useShoppingCart();
  
  // Find current product in cart if exists
  const cartItem = product 
    ? items.find(item => item.id === product.id) 
    : null;
    
  const [quantity, setQuantity] = useState(1);
  
  // Reset quantity when product changes
  useEffect(() => {
    setQuantity(1);
  }, [product?.id]);
  
  const addToCart = (qty = quantity) => {
    if (!product) return;
    
    addItem(product, qty);
    toast.success(`${product.name} added to cart`);
  };
  
  const removeFromCart = () => {
    if (!product || !cartItem) return;
    
    removeItem(product.id);
    toast.info(`${product.name} removed from cart`);
  };
  
  const updateItemQuantity = (newQuantity: number) => {
    if (!product || !cartItem) return;
    
    if (newQuantity <= 0) {
      removeFromCart();
      return;
    }
    
    updateQuantity(product.id, newQuantity);
  };
  
  const openCart = () => {
    setCartOpen(true);
  };
  
  return {
    quantity,
    setQuantity,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    openCart,
    clearCart,
    isInCart: Boolean(cartItem),
    cartItem
  };
};
