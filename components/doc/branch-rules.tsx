import { cn } from "@/lib/utils";

type BranchRulesProps = {
  title: string;
  rules: string[];
  footer: string;
  /** The home version sits on a light wall and gets the grey top bar */
  variant?: "home" | "about";
  className?: string;
};

/** White laminated sheet of house rules */
export function BranchRules({ title, rules, footer, variant = "home", className }: BranchRulesProps) {
  const home = variant === "home";
  return (
    <div
      className={cn(
        "min-w-0 bg-white",
        home
          ? "border-t-[10px] border-cubicle px-6 pb-9 pt-8 shadow-[0_12px_30px_rgba(18,20,23,0.12)] sm:px-9"
          : "px-6 pb-10 pt-9 shadow-[0_16px_36px_rgba(0,0,0,0.25)] sm:px-10",
        className,
      )}
    >
      <p className="font-condensed text-2xl font-bold">{title}</p>
      <ol className={cn("list-decimal space-y-2 pl-6 text-muted-deep", home ? "mt-3.5" : "mt-4 space-y-2.5")}>
        {rules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ol>
      <p className={cn("font-mono text-[13px] text-muted", home ? "mt-4" : "mt-[18px]")}>{footer}</p>
    </div>
  );
}
