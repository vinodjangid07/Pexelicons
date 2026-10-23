export function HeroHeader() {
  return (
    <section aria-labelledby="page-title" className="mb-14">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="text-sm font-medium text-[#6b7280]">
            Windows folder icon collection • 30 ICO files
          </span>
          <h1
            id="page-title"
            className="mt-3 text-4xl font-semibold tracking-tight text-[#0c0d0e] sm:text-5xl lg:text-6xl"
          >
            Thirty folder icons for Windows.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4b5563] sm:text-lg">
            Handcrafted 32-bit ICO files for the folders you open every day. In saturated honey yellow and royal purple colorways, with 9 embedded mipmap scales up to 256 pixels.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-xl bg-white px-4 py-2.5 text-xs font-medium text-[#4b5563]">
            30 ICO files
          </span>
          <span className="rounded-xl bg-white px-4 py-2.5 text-xs font-medium text-[#4b5563]">
            2 colorways
          </span>
          <span className="rounded-xl bg-white px-4 py-2.5 text-xs font-medium text-[#4b5563]">
            256px native
          </span>
          <span className="rounded-xl bg-white px-4 py-2.5 text-xs font-medium text-[#4b5563]">
            Free under MIT
          </span>
        </div>
      </div>
    </section>
  );
}
