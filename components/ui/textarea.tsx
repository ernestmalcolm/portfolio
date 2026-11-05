import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "block w-full rounded border border-field bg-navy-light px-3 py-2.5 text-base text-cream placeholder:text-muted hover:border-mist focus-visible:border-coral disabled:cursor-not-allowed disabled:opacity-60 min-h-[140px]",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
