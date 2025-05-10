import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";

interface NavbarItemProps {
  name: string;
  href: string;
  isActive?: boolean;
}

const NavbarItem: FC<NavbarItemProps> = ({ name, href, isActive }) => {
  return (
    <Link
      href={href}
      className={`text-sm font-medium ${
        isActive ? "text-primary" : "text-muted-foreground"
      } hover:text-primary`}
    >
      {name}
    </Link>
  );
};

const navbarItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Categories",
    href: "/categories",
  },
  {
    name: "Deals",
    href: "/deals",
  },
  {
    name: "New Arrivals",
    href: "/new-arrivals",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-col w-full">
      {/* pre header */}

      <nav className="flex items-center justify-between w-full px-4 py-2 bg-white ">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-lg font-bold text-primary">
            Logo
          </Link>
          <div className="hidden md:flex space-x-4">
            {navbarItems.map((item) => (
              <NavbarItem key={item.name} {...item} />
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <User size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart size={20} />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
