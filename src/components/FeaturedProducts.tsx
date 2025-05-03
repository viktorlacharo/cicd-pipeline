import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ProductCard from "./ProductCard";
import { featuredProducts } from "@/data/products";

const FeaturedProducts: FC = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <a href="/products/featured" className="text-primary hover:underline">
            View all
          </a>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {featuredProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.image}
                    category={product.category}
                    isNew={product.isNew}
                    isSale={product.isSale}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedProducts;
