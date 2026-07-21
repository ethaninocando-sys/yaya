function Wordmark() {
  return (
    <span className="flex items-baseline">
      <span className="font-dm-serif text-[25px] text-boutique-brown">Designs</span>
      <span className="font-sacramento ml-1.5 text-[30px] leading-[0.8] text-boutique-tan">
        by Yaya
      </span>
    </span>
  );
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-[rgba(35,22,13,0.1)] bg-[rgba(244,234,217,0.9)] px-6 py-4 backdrop-blur-[10px] md:px-10">
      <a href="#i1-top" aria-label="Designs by Yaya — home">
        <Wordmark />
      </a>
      <div className="flex items-center gap-5 text-sm font-semibold sm:gap-7">
        <a
          href="#i1-how"
          className="hidden text-boutique-brown2 no-underline transition-colors hover:text-boutique-tan sm:inline"
        >
          The Hat Bar
        </a>
        <a
          href="#i1-gallery"
          className="hidden text-boutique-brown2 no-underline transition-colors hover:text-boutique-tan sm:inline"
        >
          Gallery
        </a>
        <a
          href="#i1-book"
          className="inline-block rounded-full bg-boutique-brown px-[22px] py-[11px] tracking-[0.06em] text-boutique-cream no-underline transition-colors hover:bg-boutique-teal hover:text-boutique-brown"
        >
          Book a Session
        </a>
      </div>
    </nav>
  );
}
