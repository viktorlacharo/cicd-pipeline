import React, { FC } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  useHelvetica?: boolean;
  useSecondaryHelvetica?: boolean;
}

const Heading: FC<HeadingProps> = ({
  children,
  className,
  as: Component = "h2",
  useHelvetica = false,
  useSecondaryHelvetica = false,
}) => {
  return (
    <Component
      className={cn(
        "font-bold",
        useHelvetica && "font-helvetica",
        useSecondaryHelvetica && "font-helvetica-secondary",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Heading;
