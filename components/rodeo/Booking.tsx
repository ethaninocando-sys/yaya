import { INSTAGRAM_URL, INSTAGRAM_HANDLE, cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

const CARDS = [
  {
    title: "In-Store",
    desc: "One-on-one at the bar with Yaya, designed in person.",
    className: "bg-rodeo-black text-rodeo-sand",
  },
  {
    title: "Virtual",
    desc: "Design over video, wherever you are.",
    className: "bg-rodeo-sand text-rodeo-black",
  },
];

export default function Booking() {
  return (
    <section id="i2-book" className="mx-auto max-w-[1000px] px-6 py-[84px] sm:px-11">
      <h2 className="font-anton m-0 mb-11 text-center text-[clamp(38px,6vw,76px)] uppercase">
        Book a Seat
      </h2>
      <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2">
        {CARDS.map((card, i) => (
          <Reveal
            key={card.title}
            delay={i * 0.08}
            className={cn("border-4 border-rodeo-black px-[34px] py-10", card.className)}
          >
            <h3 className="font-anton m-0 mb-3 text-[30px] uppercase">{card.title}</h3>
            <p className="m-0 text-[15px] leading-[1.55]">{card.desc}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-anton inline-block bg-rodeo-rust px-12 py-5 text-[20px] uppercase tracking-[0.08em] text-rodeo-sand no-underline transition-colors hover:bg-rodeo-black"
        >
          DM {INSTAGRAM_HANDLE} →
        </a>
      </div>
    </section>
  );
}
