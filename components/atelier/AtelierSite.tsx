import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/utils";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Process from "./Process";
import Gallery from "./Gallery";
import Booking from "./Booking";

export default function AtelierSite() {
  const year = new Date().getFullYear();
  return (
    <div className="font-jost overflow-x-hidden bg-atelier-paper pb-20 font-light text-atelier-ink">
      <Navbar />
      <Hero />
      <Process />
      <Gallery />
      <Booking />
      <footer className="mx-auto max-w-[1120px] px-6 pt-14 text-center sm:px-10 md:px-[60px]">
        <div className="font-cormorant text-[20px] text-atelier-ink">Designs by Yaya</div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs uppercase tracking-[0.22em] text-atelier-gold no-underline hover:opacity-70"
        >
          {INSTAGRAM_HANDLE}
        </a>
        <p className="mt-2 text-xs text-atelier-muted">
          © {year} Designs by Yaya · Rio Grande Valley
        </p>
      </footer>
    </div>
  );
}
