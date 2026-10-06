import type {
  Certification,
  Education,
  Methodology as MethodologyContent,
} from "@/data/content";

interface MethodologyProps {
  certifications: Certification[];
  education: Education;
  methodology: MethodologyContent;
  title: string;
  educationLabel: string;
  certificationsLabel: string;
}

export default function Methodology({
  certifications,
  education,
  methodology,
  title,
  educationLabel,
  certificationsLabel,
}: MethodologyProps) {
  return (
    <section id="methodology" className="border-t border-white px-6 py-24 sm:px-10">
      <h2
        className="mb-12 font-black leading-none tracking-tight"
        style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
      >
        {title}
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        <p className="max-w-[65ch] text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
          {methodology.body}
        </p>

        <div className="aspect-video w-full border border-white">
          <iframe
            className="h-full w-full"
            src={methodology.videoUrl}
            title={methodology.videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-20 border-t border-white pt-10">
        <span className="text-base uppercase tracking-[0.3em] text-white/40">
          {educationLabel}
        </span>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="text-xl font-bold">
            {education.school}
            <span className="ml-2 text-base font-normal text-white/60">
              — {education.location}
            </span>
          </span>
          <span className="text-sm font-medium tabular-nums tracking-wide text-white/60">
            {education.degree} · {education.date}
          </span>
        </div>
        <p className="mt-4 text-base leading-7 text-white/60">
          {education.coursework.join(" · ")}
        </p>
      </div>

      <div className="mt-16 border-t border-white pt-10">
        <span className="text-base uppercase tracking-[0.3em] text-white/40">
          {certificationsLabel}
        </span>
        <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex flex-col gap-2">
              <span className="text-lg font-bold uppercase tracking-tight">
                {cert.name}
              </span>
              <span className="text-sm font-medium tabular-nums tracking-wide text-white/60">
                {cert.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
