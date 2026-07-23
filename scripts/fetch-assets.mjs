/**
 * Downloads the premium, on-brand product imagery (generated with Higgsfield Soul)
 * into /public/assets at build time, converting to optimized JPGs at the real asset
 * paths the site expects. This replaces the placeholder generator for deploys.
 *
 * To swap in real hat photos later, drop files with the same names into /public/assets
 * and remove this step from the build — no code change needed.
 *
 *   node scripts/fetch-assets.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "assets");

const CDN =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3FZI2PSNErc2Kmzs3u4oFO5gVgJ";

/** filename (without extension) -> { url, w } — square unless a width/height pair is given */
const ASSETS = {
  "p1.jpg": { file: "hf_20260723_211137_e4cf785d-016f-423c-83f1-a1609cff65b3.png" },
  "p2.jpg": { file: "hf_20260723_211140_408f71be-8f53-458b-915f-64991ed832be.png" },
  "p3.jpg": { file: "hf_20260723_211143_988557a1-20b7-46d7-9bca-1ab8d1580b13.png" },
  "p4.jpg": { file: "hf_20260723_211146_cd169fb9-060e-4755-9b90-3a7c28948318.png" },
  "p5.jpg": { file: "hf_20260723_211156_f4a98425-0e04-4cd7-8082-ab4f70a141cd.png" },
  "p6.jpg": { file: "hf_20260723_211158_8812cd37-9355-4b1b-8398-db93931bbbc3.png" },
  "p7.jpg": { file: "hf_20260723_211201_96040d26-2d4d-4480-b81a-fa8fa68acbac.png" },
  "p8.jpg": { file: "hf_20260723_211204_e1e33f84-256b-4b9b-8fe1-570bebf6d088.png" },
  "p9.jpg": { file: "hf_20260723_211625_e1e76aa8-5bad-43ce-8a3f-75010f0b463c.png" },
  "hf-workshop.jpg": {
    file: "hf_20260723_211210_266c6cb5-56dd-4ab6-87b1-f2e6b2484746.png",
    w: 1600,
    h: 900,
  },
  "hf-flatlay.jpg": { file: "hf_20260723_211628_7624b7ca-3074-431e-8416-9102bfaba7b5.png" },
};

const SIZE = 1400; // max square edge; keeps assets crisp but light

await mkdir(OUT, { recursive: true });

async function fetchBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status} ${res.statusText}`);
  return Buffer.from(await res.arrayBuffer());
}

await Promise.all(
  Object.entries(ASSETS).map(async ([name, spec]) => {
    const buf = await fetchBuffer(`${CDN}/${spec.file}`);
    const img = sharp(buf);
    const resized = spec.w
      ? img.resize(spec.w, spec.h, { fit: "cover" })
      : img.resize(SIZE, SIZE, { fit: "cover" });
    await writeFile(join(OUT, name), await resized.jpeg({ quality: 84, mozjpeg: true }).toBuffer());
    console.log("wrote", name);
  }),
);

console.log("Done — fetched", Object.keys(ASSETS).length, "brand assets into public/assets");
