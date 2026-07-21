/**
 * Generates on-brand placeholder JPGs at the real asset paths so the layout is complete
 * before the actual hat photos are supplied. To use the real photos, drop files with the
 * same names into /public/assets — no code change needed.
 *
 *   node scripts/generate-placeholders.mjs
 */
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "assets");

const CREAM = "#f4ead9";
const INK = "#23160d";

/** filename → { label, sub, w, h, bg, fg } */
const SPECS = {
  "p1.jpg": { label: "Black felt", sub: "white roses", bg: "#23160d", fg: CREAM },
  "p2.jpg": { label: "Sand felt", sub: "initials", bg: "#a9743f", fg: INK },
  "p3.jpg": { label: "Red felt", sub: "floral burn", bg: "#c6522e", fg: CREAM },
  "p4.jpg": { label: "Straw", sub: "turquoise rose", bg: "#2b9e93", fg: INK },
  "p5.jpg": { label: "Rust suede", sub: "feathers", bg: "#6a5642", fg: CREAM },
  "p6.jpg": { label: "Caramel felt", sub: "rose vine", bg: "#9a7b54", fg: INK },
  "p7.jpg": { label: "Tan straw", sub: "tooled band", bg: "#c6a24a", fg: INK },
  "p8.jpg": { label: "Turquoise", sub: "feather", bg: "#262220", fg: "#c9a97a" },
  "p9.jpg": { label: "Gray felt", sub: "butterfly", bg: "#4a362a", fg: CREAM },
  "hf-workshop.jpg": {
    label: "The Hat Bar",
    sub: "workshop scene",
    bg: "#23160d",
    fg: "#c6a24a",
    w: 1600,
    h: 1000,
  },
  "hf-flatlay.jpg": {
    label: "Wood-burning",
    sub: "flat-lay",
    bg: "#2e2015",
    fg: "#d8c7a9",
    w: 1100,
    h: 1100,
  },
};

function svg({ label, sub, bg, fg, w = 1100, h = 1100 }) {
  const cx = w / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <rect x="28" y="28" width="${w - 56}" height="${h - 56}" fill="none" stroke="${fg}" stroke-opacity="0.35" stroke-width="2"/>
  <text x="${cx}" y="${h / 2 - 40}" fill="${fg}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${Math.round(w * 0.075)}" font-style="italic">${label}</text>
  <text x="${cx}" y="${h / 2 + 34}" fill="${fg}" fill-opacity="0.85" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.round(w * 0.05)}">${sub}</text>
  <text x="${cx}" y="${h - 70}" fill="${fg}" fill-opacity="0.55" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" letter-spacing="3">DESIGNS BY YAYA · PLACEHOLDER</text>
</svg>`;
}

await mkdir(OUT, { recursive: true });

for (const [name, spec] of Object.entries(SPECS)) {
  const buf = Buffer.from(svg(spec));
  await sharp(buf).jpeg({ quality: 82, mozjpeg: true }).toFile(join(OUT, name));
  console.log("wrote", name);
}

console.log("Done — 11 placeholder assets in public/assets");
