import HeroBanner from "@/components/HeroBanner";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/ProductCard";
import { newArrivals, saleProducts } from "@/data/products";
import PayloadLanding from "@/features/payload/components/PayloadLanding";

import configPromise from "@payload-config";
import { getPayload } from "payload";

const HomePage = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
  });

  return (
    <main>
      {JSON.stringify(data, null, 2)}

      <HeroBanner />

      <Categories />

      <FeaturedProducts />

      {/* New Arrivals Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">New Arrivals</h2>
            <a href="/new-arrivals" className="text-primary hover:underline">
              View all
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                category={product.category}
                isNew={product.isNew}
                isSale={product.isSale}
              />
            ))}
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Sale Products Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Special Offers</h2>
            <a href="/special-offers" className="text-primary hover:underline">
              View all
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                category={product.category}
                isNew={product.isNew}
                isSale={product.isSale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Sign up to receive updates about new products and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-10 px-3 py-2 border rounded-md"
            />
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
export default HomePage;
