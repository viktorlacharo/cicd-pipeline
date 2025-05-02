import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";

interface CategoryCardProps {
  name: string;
  image: string;
  description: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ name, image, description }) => {
  return (
    <Link href={`/categories/${name.toLowerCase()}`}>
      <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg h-full">
        <div className="relative h-40">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;