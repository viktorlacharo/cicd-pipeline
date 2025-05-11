'use client';

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import AddToCartButton from "@/features/ShopingCart/components/AddToCartButton";
import { Product } from "@/data/products";

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew = false,
  isSale = false,
}) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <Link href={`/product/${id}`} className="block relative">
        <div className="h-48 sm:h-64 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            style={{ objectFit: "cover" }}
          />
        </div>
        {(isNew || isSale) && (
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {isNew && <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>}
            {isSale && <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>}
          </div>
        )}
      </Link>
      
      <CardContent className="pt-4">
        <Link href={`/categories/${category.toLowerCase()}`}>
          <p className="text-xs text-muted-foreground mb-1 hover:underline">{category}</p>
        </Link>
        <Link href={`/product/${id}`} className="block">
          <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <p className="font-bold">${price.toFixed(2)}</p>
          {originalPrice && (
            <p className="text-muted-foreground text-sm line-through">${originalPrice.toFixed(2)}</p>
          )}
        </div>
      </CardContent>      
      <CardFooter>
        <AddToCartButton 
          product={{
            id,
            name,
            price,
            originalPrice,
            image,
            category,
            description: "",
            isNew,
            isSale
          } as Product}
          size="default"
          variant="default"
        />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;