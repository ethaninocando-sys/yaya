import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/utils";
import Reveal from "@/components/Reveal";

const CARDS = [
  {
    title: "In-Store Session",
    desc: "Sit at the bar with Yaya and design your hat in person.",
  },
  {
    title: "Virtual Session",
    desc: "Design together over video, wherever you are.",
  },
];

export default function Booking() {
  return (
    <section id="i1-book" className="mx-auto max-w-[1000px] px-6 py-24 sm:px-10 md:px-[60px]">
      <div className="mb-[46px] text-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-boutique-tan">
          Book your seat
        </span>
        <h2 className="font-dm-serif m-0 mt-3.5 text-[clamp(34px,4vw,52px)] text-boutique-brown">
          Virtual or in-store — your choice
        </h2>
      </div>
      <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {CARDS.map((card, i) => (
          <Reveal
            key={card.title}
            delay={i * 0.08}
            className="rounded-2xl border border-[rgba(35,22,13,0.1)] bg-boutique-cream2 px-[30px] py-8"
          >
            <h3 className="font-dm-serif m-0 mb-2.5 text-[24px] text-boutique-brown">
              {card.title}
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.55] text-boutique-muted">{card.desc}</p>
          </Reveal>
        ))}
      </div>
      <div className="text-center">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-boutique-brown px-8 py-4 text-[15.5px] font-bold text-boutique-cream no-underline transition-colors hover:bg-boutique-teal hover:text-boutique-brown"
        >
          DM {INSTAGRAM_HANDLE} to book →
        </a>
      </div>
    </section>
  );
}
