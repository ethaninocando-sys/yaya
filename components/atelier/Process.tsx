import { ASSETS, STEPS } from "@/lib/data";
import ImageSlot from "@/components/ImageSlot";
import Reveal from "@/components/Reveal";

export default function Process() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 pb-[100px] pt-[30px] sm:px-10 md:px-[60px]">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-[72px]">
        <div className="relative aspect-square">
          <ImageSlot
            src={ASSETS.flatlay}
            alt="A flat-lay of wood-burning tools and hat materials"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <div className="mb-[22px] text-xs uppercase tracking-[0.28em] text-atelier-gold">
            The Process
          </div>
          <div className="flex flex-col gap-[30px]">
            {STEPS.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 0.06}
                className="grid grid-cols-[42px_1fr] items-start gap-[22px] border-t border-[rgba(38,34,32,0.14)] pt-[22px]"
              >
                <div className="font-cormorant text-[30px] text-atelier-gold">0{step.n}</div>
                <div>
                  <h3 className="font-cormorant m-0 mb-1.5 text-[26px] font-normal">
                    {step.title}
                  </h3>
                  <p className="m-0 text-[14.5px] font-light leading-[1.6] text-atelier-muted">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
