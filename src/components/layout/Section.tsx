import { cn } from "@/lib/utils";
import type React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: "section" | "footer" | "header" | "main";
}

export function Section({
  children,
  className,
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "relative w-full py-[clamp(4.5rem,5vw+3rem,9rem)] focus:outline-none",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
