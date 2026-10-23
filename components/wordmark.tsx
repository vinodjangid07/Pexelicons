import Image from "next/image";

export function Wordmark() {
  return (
    <a
      href="#top"
      aria-label="Pexelicons home"
      className="group flex items-center gap-2.5 text-base font-semibold tracking-tight text-[#0c0d0e] focus-visible:outline-2 focus-visible:outline-[#0c0d0e]"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0c0d0e] p-2 text-white transition-transform duration-150">
        <Image
          src="/brand/logo.svg"
          alt="Pexelicons logo"
          width={20}
          height={20}
          priority
          className="h-full w-full object-contain"
        />
      </span>
      <span>Pexelicons</span>
    </a>
  );
}
