export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-rodeo-black px-6 py-5 text-rodeo-sand sm:px-11">
      <a href="#i2-top" aria-label="Designs by Yaya — home" className="no-underline">
        <span className="font-anton text-[26px] uppercase tracking-[0.02em] text-rodeo-sand">
          Designs <span className="text-rodeo-rust">by Yaya</span>
        </span>
      </a>
      <div className="flex items-center gap-5 text-[13px] font-extrabold uppercase tracking-[0.1em] sm:gap-[30px]">
        <a
          href="#i2-gallery"
          className="hidden text-rodeo-sand no-underline transition-colors hover:text-rodeo-gold sm:inline"
        >
          Designs
        </a>
        <a
          href="#i2-book"
          className="hidden text-rodeo-sand no-underline transition-colors hover:text-rodeo-gold sm:inline"
        >
          Book
        </a>
        <a
          href="#i2-book"
          className="bg-rodeo-rust px-5 py-2.5 tracking-[0.12em] text-rodeo-sand no-underline transition-colors hover:bg-rodeo-sand hover:text-rodeo-black"
        >
          Get a Seat
        </a>
      </div>
    </nav>
  );
}
