import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "light";
type Props = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-[0.18em] uppercase transition-all duration-300 ease-out";

const variants: Record<Variant, string> = {
  primary:
    "bg-espresso text-ivory hover:bg-oak-deep border border-espresso hover:border-oak-deep",
  outline:
    "border border-espresso text-espresso hover:bg-espresso hover:text-ivory",
  ghost: "text-espresso hover:text-oak",
  light:
    "border border-ivory text-ivory hover:bg-ivory hover:text-espresso backdrop-blur-sm",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external,
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
