import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "block w-full rounded border border-field bg-navy-light px-3 py-2.5 text-base text-cream placeholder:text-muted hover:border-mist focus-visible:border-coral disabled:cursor-not-allowed disabled:opacity-60 h-11",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
