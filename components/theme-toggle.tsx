"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isLight = (mounted ? (resolvedTheme ?? theme) : "dark") === "light";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn("relative", className)}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      {isLight ? (
        <Moon className="h-[1.15rem] w-[1.15rem]" aria-hidden />
      ) : (
        <Sun className="h-[1.15rem] w-[1.15rem]" aria-hidden />
      )}
    </Button>
  );
}
