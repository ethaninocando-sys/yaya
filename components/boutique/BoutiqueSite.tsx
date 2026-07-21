import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/utils";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HatBarMarquee from "./HatBarMarquee";
import HowItWorks from "./HowItWorks";
import Gallery from "./Gallery";
import Booking from "./Booking";
import CtaBanner from "./CtaBanner";

export default function BoutiqueSite() {
  const year = new Date().getFullYear();
  return (
    <div className="font-karla overflow-x-hidden bg-boutique-cream pb-20 text-boutique-ink">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <HatBarMarquee />
      <HowItWorks />
      <Gallery />
      <Booking />
      <CtaBanner />
      <footer className="mx-auto max-w-[1240px] px-6 pt-16 text-center sm:px-10">
        <div className="flex items-baseline justify-center">
          <span className="font-dm-serif text-[22px] text-boutique-brown">Designs</span>
          <span className="font-sacramento ml-1.5 text-[26px] leading-[0.8] text-boutique-tan">
            by Yaya
          </span>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-semibold text-boutique-tan no-underline hover:text-boutique-teal"
        >
          {INSTAGRAM_HANDLE}
        </a>
        <p className="mt-2 text-xs text-boutique-muted">
          © {year} Designs by Yaya · Rio Grande Valley
        </p>
      </footer>
    </div>
  );
}
