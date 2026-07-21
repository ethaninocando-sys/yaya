import { ASSETS } from "@/lib/data";
import ImageSlot from "@/components/ImageSlot";

export default function Hero() {
  return (
    <header id="i3-top" className="mx-auto max-w-[1280px] px-6 pb-[90px] pt-10 sm:px-10 md:px-[60px]">
      <div className="mx-auto mb-14 max-w-[900px] text-center">
        <div className="mb-7 text-xs uppercase tracking-[0.34em] text-atelier-gold">
          The Custom Hat Atelier
        </div>
        <h1 className="font-cormorant m-0 text-[clamp(48px,7vw,108px)] font-light leading-[1] tracking-[-0.01em]">
          A hat as singular
          <br />
          as <em className="italic">the person</em> wearing it
        </h1>
        <p className="mx-auto mb-[34px] mt-8 max-w-[500px] text-[17px] font-light leading-[1.7] text-atelier-muted">
          Hand-burned botanicals, natural turquoise, and tooled leather — composed with you, one at a
          time, in the Rio Grande Valley.
        </p>
        <a
          href="#i3-book"
          className="inline-block border border-atelier-ink px-10 py-4 text-xs uppercase tracking-[0.24em] text-atelier-ink no-underline transition-colors hover:bg-atelier-ink hover:text-atelier-paper"
        >
          Reserve a session
        </a>
      </div>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[4px]">
        <ImageSlot
          src={ASSETS.workshop}
          alt="An editorial scene at the Designs by Yaya hat bar"
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      </div>
    </header>
  );
}
