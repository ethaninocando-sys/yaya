"use client";

import { useState } from "react";
import { type IterationId } from "@/lib/data";
import IterationSwitcher from "./IterationSwitcher";
import BoutiqueSite from "./boutique/BoutiqueSite";
import RodeoSite from "./rodeo/RodeoSite";
import AtelierSite from "./atelier/AtelierSite";

/** Holds the active iteration and renders exactly one site + the switcher (design's state.iter). */
export default function SiteSwitcher() {
  const [iter, setIter] = useState<IterationId>(1);

  return (
    <>
      {iter === 1 && <BoutiqueSite />}
      {iter === 2 && <RodeoSite />}
      {iter === 3 && <AtelierSite />}
      <IterationSwitcher active={iter} onChange={setIter} />
    </>
  );
}
