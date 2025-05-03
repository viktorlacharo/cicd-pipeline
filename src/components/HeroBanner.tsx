import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroBanner: FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 sm:py-24 sm:px-12">
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
      <div className="relative max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Find Everything You Need in One Place
        </h1>
        <p className="mt-6 text-xl">
          Shop our wide selection of high-quality products with fast shipping
          and exceptional customer service.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/categories/all">
            <Button size="lg" className="font-medium">
              Shop Now
            </Button>
          </Link>
          <Link href="/new-arrivals">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white font-medium"
            >
              New Arrivals
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
