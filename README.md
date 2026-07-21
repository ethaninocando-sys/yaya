# Designs by Yaya

Landing site for **Designs by Yaya** — a custom cowboy-hat "Hat Bar" boutique in the Rio Grande Valley
([@yayas.jewels](https://www.instagram.com/yayas.jewels/)).

Built from the Claude Design project _"Designs by Yaya"_. The site ships **three visual iterations** you can
switch between live with the floating switcher (bottom-right):

1. **Boutique** — warm editorial (DM Serif Display · Sacramento · Karla)
2. **Rodeo** — bold rodeo signage (Anton · Archivo)
3. **Atelier** — minimal luxe (Cormorant Garamond · Jost)

## Stack

- Next.js 15.5 (App Router) · React 19.1 · TypeScript 5.7
- Tailwind CSS 4 (`@tailwindcss/postcss`)
- Framer Motion · Lucide React · clsx · tailwind-merge

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build & lint:

```bash
npm run build
npm run lint
```

## Photos / assets

The real hat photos could not be pulled from the design project automatically (the design API caps file
reads at 256 KiB and the JPGs are larger). The site currently ships **on-brand placeholder images** at the
real asset paths so the layout is complete.

**To use the real photos:** drop the original files into `public/assets/`, keeping the same names —
`p1.jpg … p9.jpg`, `hf-workshop.jpg`, `hf-flatlay.jpg`. No code changes needed.

The placeholders can be regenerated with:

```bash
npm run assets:placeholders
```

## Booking

Both "book a session" actions link to Instagram DM (`@yayas.jewels`), matching the design. There is no
booking form or email backend. (Resend/Formspree are intentionally not wired — add them later if a real
form is wanted.)
