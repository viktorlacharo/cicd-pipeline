import { FC } from 'react';
import { categories } from '@/data/products';
import CategoryCard from './CategoryCard';

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              image={category.image}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;