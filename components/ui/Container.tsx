import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

export function Container({ children, className = "", size = "default" }: Props) {
  const max =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
      ? "max-w-7xl"
      : "max-w-6xl";
  return (
    <div className={`${max} mx-auto px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
