import Marquee from "@/components/Marquee";

const ITEMS = ["In-Store Sessions", "★", "Virtual Sessions", "★"];

export default function RodeoMarquee() {
  return (
    <Marquee
      durationSec={30}
      className="border-y-4 border-rodeo-gold bg-rodeo-black py-3.5 text-rodeo-gold"
    >
      <span className="font-anton inline-flex gap-10 pr-10 text-[22px] uppercase tracking-[0.04em]">
        {ITEMS.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </span>
    </Marquee>
  );
}
