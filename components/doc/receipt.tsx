import { cn } from "@/lib/utils";

type ReceiptItem = {
  label: string;
  /** One line outline under the item (home) */
  detail?: string;
  /** Right aligned value, e.g. a date (About) */
  aside?: string;
};

type ReceiptProps = {
  items: ReceiptItem[];
  /** Replaces the location line, e.g. "Promotion history" */
  subtitle?: string;
  /** Adds the "Paid with Patience" line */
  paidWith?: string;
  rotate?: number;
  className?: string;
};

const dashed = "border-dashed border-[#A9B0B6]";

/** The career receipt: a white mono slip, verified */
export function Receipt({ items, subtitle, paidWith, rotate = 1, className }: ReceiptProps) {
  return (
    <figure
      aria-label="Career receipt"
      className={cn(
        "m-0 min-w-0 bg-white px-[26px] pb-8 pt-[26px] font-mono text-sm leading-[1.7] text-ink shadow-[0_12px_30px_rgba(18,20,23,0.15)]",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <p className="text-center font-semibold">ERNEST MWINCHUMU</p>
      <p className="text-center text-muted">{subtitle ?? "Dar es Salaam, Tanzania"}</p>
      <p className={cn("mt-3 border-y py-1.5 text-center", dashed)}>No. EM-2022</p>

      <ul className="mt-3">
        {items.map((item) =>
          item.aside ? (
            <li key={item.label} className="flex justify-between gap-3">
              <span>{item.label}</span>
              <span className="text-muted">{item.aside}</span>
            </li>
          ) : (
            <li key={item.label} className="mb-2.5">
              <span className="block font-semibold">{item.label}</span>
              {item.detail && <span className="block text-[12.5px] leading-normal text-muted">{item.detail}</span>}
            </li>
          ),
        )}
      </ul>

      <dl className="mt-3 border-t-2 border-ink pt-2.5">
        <div className="flex justify-between font-semibold">
          <dt>Total</dt>
          <dd>1 Ernest</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt>VAT (Very Average Thinking)</dt>
          <dd>0%</dd>
        </div>
        {paidWith && (
          <div className="flex justify-between gap-3">
            <dt>Paid with</dt>
            <dd>{paidWith}</dd>
          </div>
        )}
      </dl>

      <p
        className="mx-auto mt-5 w-fit -rotate-[8deg] border-[3px] border-double border-stamp px-4 py-1 text-lg font-semibold tracking-[0.16em] text-stamp"
      >
        VERIFIED
      </p>
      <p className="mt-[18px] text-center text-muted">Keep this receipt for your records.</p>
      <p className={cn("mt-3 border-t pt-2.5 text-center text-xs text-muted", dashed)}>
        Printed on 100% recycled meeting notes.
      </p>
    </figure>
  );
}
