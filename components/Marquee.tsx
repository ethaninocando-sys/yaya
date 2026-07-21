import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  durationSec?: number;
  className?: string;
  trackClassName?: string;
};

/**
 * Infinite horizontal marquee. The track is rendered twice and translated -50%,
 * so the loop is seamless. Decorative — hidden from assistive tech, paused under
 * prefers-reduced-motion (see globals.css).
 */
export default function Marquee({
  children,
  durationSec = 34,
  className,
  trackClassName,
}: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)} aria-hidden="true">
      <div
        className={cn("marquee-track", trackClassName)}
        style={{ animationDuration: `${durationSec}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
