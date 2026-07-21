import { STEPS } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function HowItWorks() {
  return (
    <section id="i1-how" className="mx-auto max-w-[1240px] px-6 pb-[84px] pt-24 sm:px-10 md:px-[60px]">
      <div className="mb-14 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-boutique-tan">
          How the Hat Bar works
        </span>
        <h2 className="font-dm-serif m-0 mt-3.5 text-[clamp(34px,4vw,52px)] text-boutique-brown">
          Four steps to a hat with your name on it
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <Reveal
            key={step.n}
            delay={i * 0.08}
            className="rounded-2xl border border-[rgba(35,22,13,0.08)] bg-boutique-cream2 px-[26px] py-[30px] transition-colors hover:border-boutique-teal"
          >
            <div className="font-dm-serif mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-boutique-brown text-[15px] text-boutique-cream">
              {step.n}
            </div>
            <h3 className="font-dm-serif m-0 mb-2.5 text-[22px] text-boutique-brown">
              {step.title}
            </h3>
            <p className="m-0 text-[14.5px] leading-[1.55] text-boutique-muted">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
