"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Network, Fingerprint, type LucideIcon } from "lucide-react";
import type { Framework } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Network,
  Fingerprint,
};

interface FilmStripProps {
  frameworks: Framework[];
  focusLabel: string;
}

export default function FilmStrip({ frameworks, focusLabel }: FilmStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6667%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] w-screen"
    >
      <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center">
        <motion.div
          style={{ x, width: "300vw" }}
          className="flex h-screen will-change-transform"
        >
          {frameworks.map((framework) => {
            const Icon = iconMap[framework.icon];
            return (
              <div
                key={framework.name}
                className="w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center gap-6 p-10"
              >
                {Icon && (
                  <Icon size={96} strokeWidth={1} className="mb-8 text-white/20" />
                )}
                <h3
                  className="font-black leading-none text-center text-white"
                  style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}
                >
                  {framework.name}
                </h3>
                <p className="max-w-[55ch] text-center text-base leading-7 text-white/75 sm:text-lg">
                  {focusLabel}: {framework.focus}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
