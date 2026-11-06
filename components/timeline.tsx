import type { TimelineEntry } from "@/content/about";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="border-b border-line">
      {entries.map((entry, index) => (
        <li
          key={`${entry.role}-${entry.period}`}
          className="border-t border-line"
        >
          <div
            className="grid gap-1 py-6 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8"
          >
            <p className="font-mono text-sm text-coral">{entry.period}</p>
            <div>
              <h3 className="text-lg font-semibold">{entry.role}</h3>
              <p className="text-mist">{entry.organisation}</p>
              <p className="mt-2 max-w-prose text-muted">{entry.summary}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
