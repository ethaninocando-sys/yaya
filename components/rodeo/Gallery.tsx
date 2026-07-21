import { RODEO_GALLERY } from "@/lib/data";
import ImageSlot from "@/components/ImageSlot";

export default function Gallery() {
  return (
    <section id="i2-gallery" className="bg-rodeo-black px-6 py-[84px] sm:px-11">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex flex-wrap items-baseline gap-x-5 gap-y-2 text-rodeo-sand">
          <h2 className="font-anton m-0 text-[clamp(38px,6vw,76px)] uppercase">The Lineup</h2>
          <span className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-rodeo-gold">
            One-of-one, every time
          </span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 md:grid-cols-4">
          {RODEO_GALLERY.map((item) => (
            <div key={item.id} className="relative aspect-square border-4 border-rodeo-sand">
              <ImageSlot src={item.src} alt={item.alt} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
