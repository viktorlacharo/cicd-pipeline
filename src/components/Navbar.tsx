import { Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
    <nav className="flex items-center justify-between h-20 px-6 border-b">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>

        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold hidden sm:inline-block">
            ShopGlobe
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 ml-6">
          {navbarItems.map((item) => (
            <NavbarItem
              key={item.name}
              name={item.name}
              href={item.href}
              isActive={item.name === "Home"} // Example of active state
            />
          ))}
        </div>
      </div>

      {/* TODO: REFACTOR */}
      <div className="flex items-center gap-4">
        <div className="relative hidden md:flex items-center">
          <Input
            type="search"
            placeholder="Search products..."
            className="w-[200px] lg:w-[300px] pr-8"
          />
          <Search className="absolute right-2 h-4 w-4 text-muted-foreground" />
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            0
          </span>
        </Button>

        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
