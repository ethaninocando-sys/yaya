import type { Metadata } from "next";
import {
  DM_Serif_Display,
  Sacramento,
  Karla,
  Anton,
  Archivo,
  Cormorant_Garamond,
  Jost,
} from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--ff-dm-serif",
  display: "swap",
});

const sacramento = Sacramento({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--ff-sacramento",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--ff-karla",
  display: "swap",
});

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--ff-anton",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--ff-archivo",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--ff-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--ff-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Designs by Yaya — Custom Hat Bar & Boutique",
  description:
    "Hand-burned florals, turquoise stones, tooled leather, and your initials. Design a one-of-one custom hat with Yaya — in-store or virtual, in the Rio Grande Valley.",
  openGraph: {
    title: "Designs by Yaya — Custom Hat Bar & Boutique",
    description:
      "Wear a hat that's only yours. Book an in-store or virtual Hat Bar session with Yaya.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const fontVars = [
    dmSerif.variable,
    sacramento.variable,
    karla.variable,
    anton.variable,
    archivo.variable,
    cormorant.variable,
    jost.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
