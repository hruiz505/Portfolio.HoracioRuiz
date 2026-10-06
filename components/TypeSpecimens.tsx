"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Network,
  FileLock,
  Fingerprint,
  CreditCard,
  FolderTree,
  Terminal,
  Bot,
  Gauge,
  Siren,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";
import type { Specimen } from "@/data/content";
import { resumeDownloadUrl } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Network,
  FileLock,
  Fingerprint,
  CreditCard,
  FolderTree,
  Terminal,
  Bot,
  Gauge,
  Siren,
  ScanSearch,
};

interface TypeSpecimensProps {
  specimens: Specimen[];
  title: string;
  downloadLabel: string;
}

export default function TypeSpecimens({
  specimens,
  title,
  downloadLabel,
}: TypeSpecimensProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="frameworks" className="border-t border-white px-6 py-24 sm:px-10">
      <h2
        className="mb-16 font-black leading-none tracking-tight"
        style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
      >
        {title}
      </h2>

      <div
        ref={containerRef}
        className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4"
      >
        {specimens.map((specimen) => {
          const Icon = iconMap[specimen.icon];
          return (
            <motion.div
              key={specimen.name}
              drag
              dragConstraints={containerRef}
              dragElastic={0.15}
              whileHover={{ scale: 1.05, borderColor: "#D4AF37" }}
              whileTap={{ scale: 0.98 }}
              className="flex aspect-square cursor-grab flex-col justify-between border border-white bg-black p-5 active:cursor-grabbing"
            >
              {Icon && <Icon size={48} strokeWidth={1.5} className="mb-4 text-white/40" />}
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold uppercase tracking-tight">
                  {specimen.name}
                </span>
                <span className="text-sm font-medium tabular-nums tracking-wide text-white/60">
                  {specimen.category}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <a
        href={resumeDownloadUrl}
        download
        className="mt-16 inline-flex items-center gap-3 border border-white px-6 py-4 text-base uppercase tracking-[0.3em] transition-colors hover:bg-white hover:text-black"
      >
        {downloadLabel}
      </a>
    </section>
  );
}
