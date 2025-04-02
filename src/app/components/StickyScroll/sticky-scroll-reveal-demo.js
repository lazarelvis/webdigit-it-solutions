"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Site prezentare profesional",
    description:
      "Cream site-uri de prezentare cu de design responsive, optimizate SEO si usor de administrat.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Site prezentare profesional
      </div>
    ),
  },
  {
    title: "Magazin online la cheie",
    description: "Realizam magazine online la cheie in platformele WordPress.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Design grafic",
    description:
      "Iti cream designul pentru logo-uri, bannere web si alte elemente grafice, totul fara alte costuri suplimentare.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Design grafic
      </div>
    ),
  },
  {
    title: "Domeniu si gazduide",
    description:
      "Oferim pachete de gazduire pentru site-ul sau magazinul tau online cu domeniu inclus.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Domeniu si gazduide
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
