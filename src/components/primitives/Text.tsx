import { cn } from "@/lib/utils";
import type React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  as?: "p" | "span" | "div";
  variant?: "body" | "caption" | "secondary";
}

export function Text({
  children,
  className,
  as: Component = "p",
  variant = "body",
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        "text-balance",
        variant === "body" &&
          "text-[var(--text-body)] text-[var(--color-text-primary)] font-normal",
        variant === "secondary" &&
          "text-[var(--text-body)] text-[var(--color-text-secondary)] font-normal",
        variant === "caption" &&
          "text-[clamp(0.75rem,0.6vw+0.6rem,0.9rem)] text-[var(--color-text-secondary)] tracking-wider uppercase font-medium",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
