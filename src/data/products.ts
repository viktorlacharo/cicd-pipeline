export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: "https://picsum.photos/700";
  category: string;
  description: string;
  isNew?: boolean;
  isSale?: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    price: 249.99,
    originalPrice: 299.99,
    image: "https://picsum.photos/700",
    category: "Electronics",
    description:
      "Premium wireless headphones with active noise cancellation for an immersive audio experience.",
    isSale: true,
    featured: true,
  },
  {
    id: "2",
    name: "Smart Watch with Health Tracking",
    price: 199.99,
    image: "https://picsum.photos/700",
    category: "Electronics",
    description:
      "Track your health metrics, receive notifications, and more with this advanced smartwatch.",
    isNew: true,
    featured: true,
  },
  {
    id: "3",
    name: "Cotton Casual T-Shirt",
    price: 24.99,
    originalPrice: 34.99,
    image: "https://picsum.photos/700",
    category: "Clothing",
    description:
      "Comfortable 100% cotton t-shirt perfect for casual everyday wear.",
    isSale: true,
  },
  {
    id: "4",
    name: "Ergonomic Office Chair",
    price: 189.99,
    image: "https://picsum.photos/700",
    category: "Home Decor",
    description:
      "Comfortable ergonomic chair designed for long hours of sitting and proper posture support.",
  },
  {
    id: "5",
    name: "Bestselling Novel: The Silent Echo",
    price: 15.99,
    image: "https://picsum.photos/700",
    category: "Books",
    description:
      "The latest bestseller that's taking the literary world by storm.",
  },
  {
    id: "6",
    name: "Bluetooth Portable Speaker",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://picsum.photos/700",
    category: "Electronics",
    description:
      "Waterproof portable speaker with 20 hours of battery life and rich, immersive sound.",
    isSale: true,
  },
  {
    id: "7",
    name: "Winter Jacket with Thermal Lining",
    price: 159.99,
    image: "https://picsum.photos/700",
    category: "Clothing",
    description:
      "Stay warm with this stylish winter jacket featuring premium thermal lining.",
    isNew: true,
  },
  {
    id: "8",
    name: "Decorative Throw Pillows (Set of 2)",
    price: 34.99,
    image: "https://picsum.photos/700",
    category: "Home Decor",
    description:
      "Add a splash of color to your living space with these decorative throw pillows.",
    featured: true,
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export const newArrivals = products.filter((product) => product.isNew);

export const saleProducts = products.filter((product) => product.isSale);

export const getProductsByCategory = (category: string) => {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};

export const categories = [
  {
    name: "Electronics",
    image: "https://picsum.photos/700",
    description: "The latest gadgets and tech accessories",
  },
  {
    name: "Clothing",
    image: "https://picsum.photos/700",
    description: "Stylish apparel for all seasons",
  },
  {
    name: "Home Decor",
    image: "https://picsum.photos/700",
    description: "Beautiful items to enhance your living space",
  },
  {
    name: "Books",
    image: "https://picsum.photos/700",
    description: "Bestsellers and literary treasures",
  },
];
