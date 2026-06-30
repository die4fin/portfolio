import { cn } from "@/lib/utils";
import type React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fluid?: boolean;
}

export function Container({ children, className, fluid = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[clamp(1.25rem,1.2vw+1rem,2.25rem)]",
        fluid ? "max-w-none" : "max-w-[1600px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
