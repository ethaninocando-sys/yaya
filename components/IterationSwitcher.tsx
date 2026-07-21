"use client";

import { TABS, type IterationId } from "@/lib/data";
import { cn } from "@/lib/utils";

type IterationSwitcherProps = {
  active: IterationId;
  onChange: (id: IterationId) => void;
};

/** Floating pill (bottom-right) to switch between the three site styles. */
export default function IterationSwitcher({ active, onChange }: IterationSwitcherProps) {
  return (
    <div
      role="group"
      aria-label="Choose a site style"
      className="font-karla fixed bottom-5 right-5 z-[200] flex items-center gap-1.5 rounded-full border border-white/10 bg-[rgba(20,14,9,0.94)] px-2 py-[7px] shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-md"
    >
      {TABS.map((t) => {
        const isActive = active === t.id;
        return (
          <button
            key={t.id}
            type="button"
            aria-pressed={isActive}
            aria-label={`Show the ${t.label} style`}
            onClick={() => onChange(t.id)}
            className={cn(
              "cursor-pointer rounded-full border-none px-3 py-2 text-xs font-bold tracking-[0.03em] transition-colors",
              isActive
                ? "bg-[#f4ead9] text-[#23160d]"
                : "bg-transparent text-[#c7b48f] hover:text-[#f4ead9]",
            )}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
