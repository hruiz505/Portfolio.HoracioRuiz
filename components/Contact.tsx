"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import BrandMark from "@/components/BrandMark";
import type { Profile } from "@/data/content";

interface ContactProps {
  profile: Profile;
  title: string;
  imageCredit: string;
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

export default function Contact({ profile, title, imageCredit }: ContactProps) {
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
      <span className="absolute bottom-2 right-4 max-w-[85vw] text-right text-[9px] leading-3 text-white/40 sm:text-[10px]">
        {imageCredit}
      </span>
    </section>
  );
}
