import { cn } from "@/lib/utils";
import type React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "display" | "h1" | "h2" | "h3";
}

export function Heading({
  children,
  className,
  as: Component = "h2",
  variant = "h2",
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-bold text-wrap tracking-tight text-white",
        variant === "display" && "text-[var(--text-display)] leading-[0.95]",
        variant === "h1" && "text-[var(--text-h1)] leading-[1.05]",
        variant === "h2" && "text-[var(--text-h2)] leading-[1.1]",
        variant === "h3" && "text-[clamp(1.25rem,1.2vw+1rem,2.25rem)] leading-[1.2]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
