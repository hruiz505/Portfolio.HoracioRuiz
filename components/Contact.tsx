"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import type { Language, Profile } from "@/data/content";

interface ContactProps {
  profile: Profile;
  title: string;
  imageCredit: string;
  language: Language;
}

function UnderlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative inline-block py-1 text-base font-medium sm:text-lg"
    >
      {children}
      <motion.span
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{ originX: 0 }}
        className="absolute bottom-0 left-0 h-px w-full bg-white"
      />
    </motion.a>
  );
}

export default function Contact({ profile, title, imageCredit, language }: ContactProps) {
  const isSpanish = language === "es";
  const logoFiles = [
    {
      href: "/hr-mark.svg",
      filename: "horacio-ruiz-mark.svg",
      label: isSpanish ? "Monograma · SVG" : "Monogram · SVG",
    },
    {
      href: "/brand/horacio-ruiz-monogram-4096.png",
      filename: "horacio-ruiz-monogram-4096.png",
      label: isSpanish ? "Monograma · PNG 4096 px" : "Monogram · PNG 4096 px",
    },
    {
      href: "/brand/horacio-ruiz-wordmark-for-light-background.svg",
      filename: "horacio-ruiz-wordmark-for-light-background.svg",
      label: isSpanish ? "Logotipo para fondo claro · SVG" : "Wordmark for light backgrounds · SVG",
    },
    {
      href: "/brand/horacio-ruiz-wordmark-for-light-background-3200.png",
      filename: "horacio-ruiz-wordmark-for-light-background-3200.png",
      label: isSpanish ? "Logotipo para fondo claro · PNG 3200 px" : "Wordmark for light backgrounds · PNG 3200 px",
    },
    {
      href: "/brand/horacio-ruiz-wordmark-for-dark-background.svg",
      filename: "horacio-ruiz-wordmark-for-dark-background.svg",
      label: isSpanish ? "Logotipo para fondo oscuro · SVG" : "Wordmark for dark backgrounds · SVG",
    },
    {
      href: "/brand/horacio-ruiz-wordmark-for-dark-background-3200.png",
      filename: "horacio-ruiz-wordmark-for-dark-background-3200.png",
      label: isSpanish ? "Logotipo para fondo oscuro · PNG 3200 px" : "Wordmark for dark backgrounds · PNG 3200 px",
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex min-h-[75svh] flex-col items-center justify-center gap-10 border-t border-white/15 px-6 py-20 text-center"
    >
      <h2
        className="font-black leading-none tracking-tight"
        style={{ fontSize: "clamp(2.5rem, 10vw, 8rem)" }}
      >
        {title}
      </h2>
      <div className="flex flex-col items-center gap-4 text-white/80">
        <UnderlineLink href={`mailto:${profile.email}`}>
          {profile.email}
        </UnderlineLink>
        <UnderlineLink href={`tel:${profile.phone}`}>
          {profile.phone}
        </UnderlineLink>
        <UnderlineLink href={`https://${profile.linkedin}`}>
          {profile.linkedin}
        </UnderlineLink>
      </div>
      <div className="mt-4 border-t border-white/10 pt-8">
        <BrandMark large />
      </div>
      <div className="w-full max-w-4xl border-t border-white/10 pt-7">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4ce8a]">
          {isSpanish ? "Descargar logotipos en alta resolución" : "Download high-resolution logos"}
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {logoFiles.map((file) => (
            <a
              key={file.href}
              href={file.href}
              download={file.filename}
              className="inline-flex min-h-11 items-center gap-2 border border-white/20 px-3 py-2 text-xs text-[#f4f1df] transition-colors hover:border-[#d4ce8a] hover:bg-[#d4ce8a]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4ce8a]"
            >
              <Download aria-hidden="true" size={14} />
              {file.label}
            </a>
          ))}
        </div>
      </div>
      <span className="absolute bottom-2 right-4 max-w-[85vw] text-right text-[9px] leading-3 text-white/40 sm:text-[10px]">
        {imageCredit}
      </span>
    </section>
  );
}
