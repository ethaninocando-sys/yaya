import { STEPS } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-[84px] sm:px-11">
      <h2 className="font-anton m-0 mb-12 text-[clamp(38px,6vw,76px)] uppercase leading-[0.9]">
        How it
        <br />
        goes down
      </h2>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <Reveal
            key={step.n}
            delay={i * 0.06}
            className="bg-rodeo-black px-[26px] pb-9 pt-[30px] text-rodeo-sand transition-colors hover:bg-rodeo-rust"
          >
            <div className="font-anton mb-3.5 text-[60px] leading-none text-rodeo-gold">
              {step.n}
            </div>
            <h3 className="font-anton m-0 mb-2.5 text-[22px] uppercase tracking-[0.01em]">
              {step.title}
            </h3>
            <p className="m-0 text-sm leading-[1.55] text-rodeo-muted">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
