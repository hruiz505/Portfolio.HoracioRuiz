import Image from "next/image";

export default function BrandMark({ large = false }: { large?: boolean }) {
  const markSize = large ? 88 : 56;

  return (
    <span className={`inline-flex items-center ${large ? "gap-4" : "gap-3"}`}>
      <Image
        src="/brand/hr-clock-mark-4096.png"
        alt=""
        width={markSize}
        height={markSize}
        sizes={large ? "88px" : "56px"}
        priority={!large}
      />
      <span className="flex flex-col leading-none">
        <span className={`${large ? "text-lg sm:text-xl" : "text-sm sm:text-base"} font-bold tracking-[0.13em] text-[#f4f1df]`}>HORACIO RUIZ</span>
        <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#d4ce8a]">Applied AI · GRC · Systems</span>
      </span>
    </span>
  );
}
