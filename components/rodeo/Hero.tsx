import { ASSETS } from "@/lib/data";
import ImageSlot from "@/components/ImageSlot";

const HERO_IMAGES = [
  { src: ASSETS.p3, alt: "Red felt hat with a floral burn", priority: true },
  { src: ASSETS.p4, alt: "Straw hat with a turquoise rose", priority: false },
  { src: ASSETS.p1, alt: "Black felt hat with roses", priority: false },
];

export default function Hero() {
  return (
    <header id="i2-top" className="relative overflow-hidden bg-rodeo-rust pt-2 text-rodeo-sand">
      <div className="px-6 pb-10 pt-[54px] text-center sm:px-8">
        <div className="mb-[18px] text-[13px] font-extrabold uppercase tracking-[0.4em] text-rodeo-gold">
          ★ The Traveling Hat Bar · Rio Grande Valley ★
        </div>
        <h1 className="font-anton m-0 text-[clamp(58px,11vw,168px)] uppercase leading-[0.84] tracking-[-0.01em]">
          Custom
          <br />
          Cowboy Hats
        </h1>
        <p className="mx-auto mb-[30px] mt-[26px] max-w-[520px] text-[18px] leading-[1.55]">
          Sit at the bar. Pick your felt. Watch Yaya hand-burn florals, feathers &amp; your initials
          — right in front of you.
        </p>
        <a
          href="#i2-book"
          className="inline-block bg-rodeo-black px-10 py-[18px] text-[15px] font-extrabold uppercase tracking-[0.12em] text-rodeo-sand no-underline transition-colors hover:bg-rodeo-gold hover:text-rodeo-black"
        >
          Reserve your seat →
        </a>
      </div>
      <div className="grid grid-cols-3 gap-1.5 p-1.5">
        {HERO_IMAGES.map((img) => (
          <div
            key={img.src}
            className="relative h-[160px] border-4 border-rodeo-black sm:h-[240px] md:h-[320px]"
          >
            <ImageSlot
              src={img.src}
              alt={img.alt}
              priority={img.priority}
              sizes="(max-width: 768px) 33vw, 33vw"
            />
          </div>
        ))}
      </div>
    </header>
  );
}
