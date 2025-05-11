import ProductCard, { ProductCardProps } from "@/components/ProductCard";
import configPromise from "@payload-config";
import { getPayload } from "payload";

const dummyProducts: ProductCardProps[] = [
  {
    id: "1",
    name: "Product 1",
    price: 29.99,
    originalPrice: 39.99,
    image: "/image_1.jpg",
    category: "Category 1",
    isNew: true,
    isSale: false,
  },
  {
    id: "2",
    name: "Product 2",
    price: 19.99,
    originalPrice: 24.99,
    image: "/image_2.jpg",
    category: "Category 2",
    isNew: false,
    isSale: true,
  },
  {
    id: "3",
    name: "Product 3",
    price: 49.99,
    originalPrice: 0,
    image: "/image_3.jpg",
    category: "Category 3",
    isNew: false,
    isSale: false,
  },
];

const HomePage = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    where: {
      parentCategory: {
        exists: false,
      },
    },
    depth: 1, // Subcategories level
  });
  //console.log("data", data);

  return (
    <main className="container mx-auto p-4">
      <section className="grid grid-cols-3 gap-8">
        {dummyProducts.map((product) => (
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
      </section>
    </main>
  );
};
export default HomePage;
