import { ASSETS } from "@/lib/data";
import { INSTAGRAM_URL } from "@/lib/utils";
import ImageSlot from "@/components/ImageSlot";

export default function Hero() {
  return (
    <header
      id="i1-top"
      className="relative grid min-h-[84vh] grid-cols-1 bg-boutique-brown text-boutique-cream md:grid-cols-[1.05fr_1fr]"
    >
      <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-[60px] md:py-20">
        <div className="mb-6 inline-flex items-center gap-2.5">
          <span className="h-px w-[34px] bg-boutique-gold" />
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-boutique-gold">
            Custom Hat Bar &amp; Boutique
          </span>
        </div>
        <h1 className="font-dm-serif m-0 mb-[22px] text-[clamp(46px,5.4vw,82px)] leading-[0.98]">
          Wear a hat
          <br />
          that&apos;s{" "}
          <em className="font-sacramento text-[1.18em] not-italic text-boutique-teal">
            only yours
          </em>
          .
        </h1>
        <p className="m-0 mb-9 max-w-[460px] text-[18.5px] leading-[1.6] text-boutique-parchment">
          Hand-burned florals, turquoise stones, tooled leather, and your initials — designed with
          you at the bar.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="#i1-book"
            className="inline-flex items-center gap-2.5 rounded-full bg-boutique-teal px-[30px] py-4 text-[15.5px] font-bold text-boutique-brown no-underline transition-colors hover:bg-boutique-cream"
          >
            Book your Hat Bar →
          </a>
          <a
            href="#i1-gallery"
            className="inline-flex items-center rounded-full border border-[rgba(244,234,217,0.35)] px-[26px] py-4 text-[15px] font-semibold text-boutique-cream no-underline transition-colors hover:border-boutique-gold hover:text-boutique-gold"
          >
            See the designs
          </a>
        </div>
        <div className="mt-[52px] flex gap-[34px]">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
            aria-label="Yaya on Instagram — 5,945 followers"
          >
            <div className="font-dm-serif text-[30px] text-boutique-gold">5,945</div>
            <div className="text-xs uppercase tracking-[0.14em] text-[#a9906b]">
              Instagram followers
            </div>
          </a>
        </div>
      </div>
      <div className="relative flex items-center justify-center px-8 py-12 sm:px-14 md:py-12">
        <div className="relative aspect-square w-full max-w-[470px] overflow-hidden rounded-2xl shadow-[0_34px_72px_rgba(0,0,0,0.5)]">
          <ImageSlot
            src={ASSETS.p6}
            alt="A caramel felt hat with a hand-burned floral design"
            priority
            sizes="(max-width: 768px) 90vw, 470px"
          />
        </div>
        <div className="absolute bottom-8 left-5 h-[186px] w-[148px] overflow-hidden rounded-lg border-[6px] border-boutique-brown shadow-[0_22px_46px_rgba(0,0,0,0.55)]">
          <ImageSlot
            src={ASSETS.p3}
            alt="Close-up of a turquoise stone set beside a wood-burned motif"
            sizes="148px"
          />
        </div>
      </div>
    </header>
  );
}
