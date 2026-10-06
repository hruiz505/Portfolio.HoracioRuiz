"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/content";

interface ProjectSpreadProps {
  project: Project;
  index: number;
  toolsLabel: string;
}

export default function ProjectSpread({
  project,
  index,
  toolsLabel,
}: ProjectSpreadProps) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex min-h-[85vh] w-full items-center border-t border-white/15 px-6 py-20 sm:px-10 sm:py-24"
    >
      <div className="grid w-full gap-10 md:grid-cols-10">
        <div
          className={`flex flex-col gap-2 text-sm text-white/65 md:col-span-4 ${
            reversed ? "md:order-2" : "md:order-1"
          }`}
        >
          <span className="text-base uppercase tracking-[0.3em] text-white/40">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-base font-semibold text-white">{project.company}</span>
          <time className="text-sm font-medium tabular-nums tracking-wide text-white/55">{project.period}</time>
          <span className="text-sm leading-6">{project.role}</span>
        </div>

        <div
          className={`flex flex-col gap-6 md:col-span-6 ${
            reversed ? "md:order-1" : "md:order-2"
          }`}
        >
          <h3
            className="font-black leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
          >
            {project.title}
          </h3>
          <p className="max-w-[60ch] text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            {project.description}
          </p>
          {project.tools && project.tools.length > 0 && (
            <p className="text-sm leading-6 text-white/60">
              <span className="uppercase tracking-[0.2em] text-white/40">
                {toolsLabel}{" "}
              </span>
              {project.tools.join(" · ")}
            </p>
          )}
          <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-4">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c3bd76]"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
