import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { InnovationProject, UiStrings } from "@/data/content";

interface InnovationProps {
  projects: InnovationProject[];
  title: string;
  intro: string;
  tools: string[];
  linkedinUrl: string;
  exploreLabel: string;
  linkedinLabel: string;
  labels: UiStrings;
}

export default function Innovation({
  projects,
  title,
  intro,
  tools,
  linkedinUrl,
  exploreLabel,
  linkedinLabel,
  labels,
}: InnovationProps) {
  return (
    <section id="innovation" className="border-t border-white/15 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-white/15 pb-10 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pb-14">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#c3bd76]">
              {labels.innovationEyebrow}
            </p>
            <h2 className="flex items-center gap-3 text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              <Sparkles aria-hidden="true" className="h-8 w-8 shrink-0 text-[#c3bd76] sm:h-11 sm:w-11" strokeWidth={1.7} />
              {title}
            </h2>
          </div>
          <div>
            <p className="max-w-[62ch] text-base leading-7 text-white/75 sm:text-lg">{intro}</p>
            <a
              href={`https://${linkedinUrl}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 border-b border-[#a3a16a]/80 pb-1 text-sm font-semibold text-white transition-colors hover:text-[#d4ce8f]"
            >
              {linkedinLabel}<ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 border-b border-white/15 py-5 text-sm leading-6">
          <span className="font-semibold text-white">{labels.aiToolsLabel}</span>
          <span aria-hidden="true" className="text-white/35">/</span>
          <span className="text-white/65">{tools.join(" · ")}</span>
        </div>

        <div className="grid gap-x-10 md:grid-cols-2">
          {projects.map((project, index) => {
            const images = project.screenshots ?? (project.image ? [{ src: project.image, alt: project.imageAlt ?? "" }] : []);
            return (
            <article key={project.id} className="flex min-w-0 flex-col border-b border-white/15 py-8 sm:py-10">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                <span>{project.category}</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">{project.title}</h3>
              <p className="mt-3 text-base leading-7 text-white/70">{project.summary}</p>
              {images.length > 0 && (
                <div className={`mt-6 grid gap-3 ${images.length > 1 ? "sm:grid-cols-2" : ""}`}>
                  {images.map((image) => (
                    <figure key={image.src} className="overflow-hidden border border-white/10 bg-white/5">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1280}
                        height={720}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="h-auto w-full object-cover"
                      />
                    </figure>
                  ))}
                </div>
              )}

              <div className="mt-6 border-l-2 border-[#a3a16a]/80 pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c3bd76]">{labels.innovationChallenge}</p>
                <p className="mt-2 text-sm leading-6 text-white/75">{project.challenge}</p>
              </div>

              <ol className="mt-6 space-y-4">
                {project.process.map((step, stepIndex) => (
                  <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="pt-0.5 text-xs font-semibold tabular-nums text-white/40">0{stepIndex + 1}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-white/65">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">{labels.innovationAiRole}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{project.aiRole}</p>
              </div>
              <p className="mt-4 text-xs leading-5 text-white/45">{labels.innovationTools}: {project.tools.join(" · ")}</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">{labels.innovationEvidence}</p>
                <p className="mt-2 text-sm leading-6 text-white/65">{project.evidence}</p>
                <p className="mt-3 text-xs font-semibold leading-5 text-[#c3bd76]">{project.status}</p>
              </div>
            </article>
            );
          })}
        </div>

        <div className="pt-8">
          <a href={`https://${linkedinUrl}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white">
            {exploreLabel}<ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
