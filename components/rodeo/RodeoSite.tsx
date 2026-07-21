import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/utils";
import Navbar from "./Navbar";
import Hero from "./Hero";
import RodeoMarquee from "./RodeoMarquee";
import HowItWorks from "./HowItWorks";
import Gallery from "./Gallery";
import Booking from "./Booking";

export default function RodeoSite() {
  const year = new Date().getFullYear();
  return (
    <div className="font-archivo overflow-x-hidden bg-rodeo-sand pb-20 text-rodeo-black">
      <Navbar />
      <Hero />
      <RodeoMarquee />
      <HowItWorks />
      <Gallery />
      <Booking />
      <footer className="mx-auto max-w-[1200px] px-6 pt-12 text-center sm:px-11">
        <span className="font-anton text-[22px] uppercase text-rodeo-black">
          Designs <span className="text-rodeo-rust">by Yaya</span>
        </span>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block text-[13px] font-extrabold uppercase tracking-[0.1em] text-rodeo-rust no-underline hover:text-rodeo-black"
        >
          {INSTAGRAM_HANDLE}
        </a>
        <p className="mt-2 text-xs text-rodeo-black/60">
          © {year} Designs by Yaya · Rio Grande Valley
        </p>
      </footer>
    </div>
  );
}
