"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { Profile } from "@/data/content";

interface HeroProps {
  profile: Profile;
  scrollLabel: string;
}

const letterVariants: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", y: 20, opacity: 0 },
  visible: (i: number) => ({
    clipPath: "inset(0 0% 0 0)",
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.05, ease: "easeOut" },
  }),
};

export default function Hero({ profile, scrollLabel }: HeroProps) {
  const letters = profile.name.split("");
  const settleDelay = letters.length * 0.05;

  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col items-center justify-center px-6 pb-24 pt-28 text-center"
    >
      <h1
        className="flex flex-wrap justify-center font-black leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            className="inline-block whitespace-pre"
          >
            {letter === " " ? " " : letter}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: settleDelay + 0.2, duration: 0.6, ease: "easeOut" }}
        className="mt-6 max-w-4xl text-base font-semibold leading-7 text-[#c3bd76] sm:text-xl"
      >
        {profile.title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: settleDelay + 0.4, duration: 0.6, ease: "easeOut" }}
        className="mt-5 max-w-[64ch] text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
      >
        {profile.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: settleDelay + 0.6, duration: 0.6 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/55"
      >
        <span>{scrollLabel}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
