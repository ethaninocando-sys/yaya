import Marquee from "@/components/Marquee";
import { MARQUEE_ITEMS } from "@/lib/data";

export default function HatBarMarquee() {
  return (
    <Marquee durationSec={34} className="bg-boutique-tan py-[15px] text-boutique-brown">
      <span className="font-dm-serif inline-flex gap-[46px] pr-[46px] text-[22px]">
        {MARQUEE_ITEMS.map((item) => (
          <span key={item}>✶ {item}</span>
        ))}
      </span>
    </Marquee>
  );
}
