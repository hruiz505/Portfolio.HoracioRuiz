import Image from "next/image";

export default function BrandMark() {
  return (
    <span className="inline-flex items-center gap-3" aria-label="Horacio Ruiz">
      <Image src="/hr-mark.svg" alt="" width={42} height={42} priority />
      <span className="flex flex-col leading-none">
        <span className="text-[13px] font-bold tracking-[0.13em] text-white sm:text-sm">HORACIO RUIZ</span>
        <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/55">AI · GRC · Systems</span>
      </span>
    </span>
  );
}
