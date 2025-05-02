import React, { FC } from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default HomeLayout;
