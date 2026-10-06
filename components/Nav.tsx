"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import AudioToggle from "@/components/AudioToggle";
import BrandMark from "@/components/BrandMark";
import { ambientAudioCredit, ambientAudioUrl } from "@/data/content";
import type { Language, NavLink } from "@/data/content";

interface NavProps {
  navLinks: NavLink[];
  language: Language;
  onToggleLanguage: () => void;
}

export default function Nav({ navLinks, language, onToggleLanguage }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isAudioPlaying) {
      audio.pause();
      setIsAudioPlaying(false);
      return;
    }

    audio.muted = false;
    audio
      .play()
      .then(() => setIsAudioPlaying(true))
      .catch(() => {
        audio.muted = true;
      });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#a3a16a]/20 bg-[#11120d]/85 backdrop-blur-md">
      <audio
        ref={audioRef}
        src={ambientAudioUrl}
        loop
        muted
        className="hidden"
        title={ambientAudioCredit}
      />

      <div className="flex items-center justify-between px-6 py-5 sm:px-10">
        <motion.a
          href="#top"
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          aria-label="Horacio Ruiz — home"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b6b176]"
        >
          <BrandMark />
        </motion.a>

        <div className="hidden items-center gap-5 text-xs font-semibold uppercase tracking-[0.12em] lg:flex">
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={onToggleLanguage}
            aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
            className="border border-white px-3 py-1.5 text-white transition-colors hover:bg-white hover:text-black"
          >
            {language === "en" ? "ES" : "EN"}
          </button>
          <AudioToggle
            isPlaying={isAudioPlaying}
            onToggle={toggleAudio}
            className="px-3 py-1.5"
          />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex md:hidden"
        >
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full bg-black md:hidden"
          >
            <nav className="flex flex-col gap-6 px-6 py-8 text-base uppercase tracking-[0.2em]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={onToggleLanguage}
                  aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
                  className="w-fit border border-white px-3 py-1.5 text-white transition-colors hover:bg-white hover:text-black"
                >
                  {language === "en" ? "ES" : "EN"}
                </button>
                <AudioToggle
                  isPlaying={isAudioPlaying}
                  onToggle={toggleAudio}
                  className="px-3 py-1.5"
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
