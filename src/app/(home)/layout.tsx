import Navbar from "@/components/Navbar";
import React, { FC } from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
};

export default HomeLayout;
