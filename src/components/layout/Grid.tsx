import { cn } from "@/lib/utils";
import type React from "react";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 12;
}

export function Grid({ children, className, cols = 12, ...props }: GridProps) {
  return (
    <div
      className={cn(
        "grid w-full gap-[clamp(1.25rem,1.2vw+1rem,2.25rem)]",
        cols === 12 && "grid-cols-1 md:grid-cols-12",
        cols === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        cols === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        cols === 2 && "grid-cols-1 md:grid-cols-2",
        cols === 1 && "grid-cols-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
