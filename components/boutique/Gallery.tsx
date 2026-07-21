import { BOUTIQUE_GALLERY } from "@/lib/data";
import { cn } from "@/lib/utils";
import ImageSlot from "@/components/ImageSlot";

export default function Gallery() {
  return (
    <section id="i1-gallery" className="bg-boutique-brown px-6 py-[90px] text-boutique-cream sm:px-10 md:px-[60px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-boutique-gold">
              The Collection
            </span>
            <h2 className="font-dm-serif m-0 mt-3 text-[clamp(34px,4vw,52px)]">No two are alike</h2>
          </div>
          <p className="m-0 max-w-[360px] text-[15px] leading-[1.6] text-[#c7b48f]">
            Every piece started as a blank felt. A few of Yaya&apos;s favorites.
          </p>
        </div>
        <div className="grid auto-rows-[150px] grid-cols-2 gap-3.5 sm:auto-rows-[190px] md:grid-cols-4 md:auto-rows-[210px]">
          {BOUTIQUE_GALLERY.map((item) => (
            <div
              key={item.id}
              className={cn(
                "relative overflow-hidden rounded-xl",
                item.span && "row-span-2",
              )}
            >
              <ImageSlot
                src={item.src}
                alt={item.alt}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
