import Image from "next/image";

export default function BrandMark({ large = false }: { large?: boolean }) {
  const markSize = large ? 72 : 48;

  return (
    <span className={`inline-flex items-center ${large ? "gap-4" : "gap-3"}`}>
      <Image src="/hr-mark.svg" alt="" width={markSize} height={markSize} priority={!large} />
      <span className="flex flex-col leading-none">
        <span className={`${large ? "text-base sm:text-lg" : "text-[13px] sm:text-sm"} font-bold tracking-[0.13em] text-white`}>HORACIO RUIZ</span>
        <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-[#c3bd76]">Applied AI · GRC · Systems</span>
      </span>
    </span>
  );
}
