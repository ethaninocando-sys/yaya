/**
 * Shared content for all three iterations, ported from the Design Composer source.
 * The design drove every iteration from one dataset (steps, gallery, sessions); we keep that.
 */

export const ASSETS = {
  p1: "/assets/p1.jpg",
  p2: "/assets/p2.jpg",
  p3: "/assets/p3.jpg",
  p4: "/assets/p4.jpg",
  p5: "/assets/p5.jpg",
  p6: "/assets/p6.jpg",
  p7: "/assets/p7.jpg",
  p8: "/assets/p8.jpg",
  p9: "/assets/p9.jpg",
  workshop: "/assets/hf-workshop.jpg",
  flatlay: "/assets/hf-flatlay.jpg",
} as const;

export type Step = { n: string; title: string; body: string };

export const STEPS: Step[] = [
  {
    n: "1",
    title: "Pick your base",
    body: "Felt or straw, any color — from classic sand to bold red or black.",
  },
  {
    n: "2",
    title: "Choose your art",
    body: "Florals, butterflies, feathers, brands. We sketch it with you.",
  },
  {
    n: "3",
    title: "Add the details",
    body: "Turquoise stones, tooled leather bands, silver conchos, your initials.",
  },
  {
    n: "4",
    title: "Burn & wear",
    body: "Yaya hand-burns it in front of you. Walk out with your one-of-one.",
  },
];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  /** Bento row span (Boutique only). */
  span?: boolean;
};

/** Boutique — asymmetric bento grid. */
export const BOUTIQUE_GALLERY: GalleryItem[] = [
  { id: "i1-g1", src: ASSETS.p3, alt: "Red felt hat with hand-burned floral detail", span: true },
  { id: "i1-g2", src: ASSETS.p4, alt: "Turquoise rose and feather on a straw hat" },
  { id: "i1-g3", src: ASSETS.p7, alt: "Tan straw hat with a tooled leather band" },
  { id: "i1-g4", src: ASSETS.p6, alt: "Caramel felt hat with a rose vine burn", span: true },
  { id: "i1-g5", src: ASSETS.p1, alt: "Black felt hat with white roses" },
  { id: "i1-g6", src: ASSETS.p9, alt: "Gray felt hat with a butterfly motif", span: true },
  { id: "i1-g7", src: ASSETS.p2, alt: "Sand felt hat personalized with initials" },
  { id: "i1-g8", src: ASSETS.p5, alt: "Rust suede hat trimmed with feathers" },
];

/** Rodeo — square bordered grid. */
export const RODEO_GALLERY: GalleryItem[] = [
  { id: "i2-g1", src: ASSETS.p7, alt: "Sand felt hat personalized with initials" },
  { id: "i2-g2", src: ASSETS.p6, alt: "Tan suede hat with a rose burn" },
  { id: "i2-g3", src: ASSETS.p5, alt: "Cowhide-brim hat" },
  { id: "i2-g4", src: ASSETS.p4, alt: "Straw hat with a turquoise flower" },
  { id: "i2-g5", src: ASSETS.p9, alt: "Cognac hat with a floral burn" },
  { id: "i2-g6", src: ASSETS.p8, alt: "Hat with a turquoise feather" },
  { id: "i2-g7", src: ASSETS.p2, alt: "Leather outback hat with a star concho" },
  { id: "i2-g8", src: ASSETS.p3, alt: "Red hat with a floral burn" },
];

/** Atelier — clean 3-column grid. */
export const ATELIER_GALLERY: GalleryItem[] = [
  { id: "i3-g1", src: ASSETS.p3, alt: "Red floral suede hat" },
  { id: "i3-g2", src: ASSETS.p4, alt: "Straw hat with a turquoise flower" },
  { id: "i3-g3", src: ASSETS.p1, alt: "Black straw hat with a bull pin" },
  { id: "i3-g4", src: ASSETS.p6, alt: "Tan suede hat with a rose burn" },
  { id: "i3-g5", src: ASSETS.p7, alt: "Hat personalized with initials" },
  { id: "i3-g6", src: ASSETS.p5, alt: "Cowhide-brim hat" },
];

export type Session = { title: string; desc: string };

export const SESSIONS: Session[] = [
  {
    title: "In-Store Session",
    desc: "A private seat at the bar, designed one-on-one with Yaya, in person.",
  },
  {
    title: "Virtual Session",
    desc: "Design together over video, wherever you are — delivered to your door.",
  },
];

export const MARQUEE_ITEMS = [
  "Wood-Burned Florals",
  "Turquoise & Silver",
  "Tooled Leather",
  "Felt & Straw",
  "Initials & Brands",
];

export type IterationId = 1 | 2 | 3;

export const TABS: { id: IterationId; label: string }[] = [
  { id: 1, label: "Boutique" },
  { id: 2, label: "Rodeo" },
  { id: 3, label: "Atelier" },
];
