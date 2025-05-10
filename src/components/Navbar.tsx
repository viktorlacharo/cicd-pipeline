import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import PreHeader from "./PreHeader";
import Image from "next/image";

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
    name: "NEW IN",
    href: "/new-in/",
  },
  {
    name: "SHOP",
    href: "/shop/",
  },
  {
    name: "PERSONAL SHOPPING",
    href: "/personal-shopping/",
  },
  {
    name: "CONSIGN",
    href: "/consign/",
  },
  {
    name: "ABOUT US",
    href: "/about-us/",
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-col w-full">
      <PreHeader />

      <nav className="flex items-center justify-between w-full  container mx-auto p-4  bg-white ">
        <Link href="/" className="text-lg font-bold text-primary">
          <Image
            width={24}
            className=""
            height={20}
            src={"/logo.webp"}
            alt="Logo"
          />
        </Link>
        <div className="hidden md:flex space-x-4">
          {navbarItems.map((item) => (
            <NavbarItem key={item.name} {...item} />
          ))}
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
