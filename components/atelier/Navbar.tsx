export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-6 sm:px-10 md:px-[60px] md:py-[30px]">
      <a href="#i3-top" aria-label="Designs by Yaya — home" className="no-underline">
        <span className="font-cormorant text-[24px] tracking-[0.02em] text-atelier-ink">
          Designs by Yaya
        </span>
      </a>
      <div className="flex items-center gap-6 text-xs uppercase tracking-[0.22em] sm:gap-10">
        <a
          href="#i3-gallery"
          className="hidden text-atelier-ink no-underline transition-opacity hover:opacity-60 sm:inline"
        >
          Atelier
        </a>
        <a
          href="#i3-book"
          className="hidden text-atelier-ink no-underline transition-opacity hover:opacity-60 sm:inline"
        >
          Book
        </a>
        <a
          href="#i3-book"
          className="border-b border-atelier-gold pb-0.5 text-atelier-gold no-underline transition-opacity hover:opacity-70"
        >
          Reserve a Session
        </a>
      </div>
    </nav>
  );
}
