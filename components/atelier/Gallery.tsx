import { ATELIER_GALLERY } from "@/lib/data";
import ImageSlot from "@/components/ImageSlot";

export default function Gallery() {
  return (
    <section id="i3-gallery" className="mx-auto max-w-[1280px] px-6 pb-[100px] sm:px-10 md:px-[60px]">
      <div className="mb-[52px] text-center">
        <div className="mb-3.5 text-xs uppercase tracking-[0.28em] text-atelier-gold">
          Selected Works
        </div>
        <h2 className="font-cormorant m-0 text-[clamp(36px,4.5vw,62px)] font-light">
          The Atelier Archive
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
        {ATELIER_GALLERY.map((item) => (
          <div key={item.id} className="relative aspect-square">
            <ImageSlot src={item.src} alt={item.alt} sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
