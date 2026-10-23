import Image from "next/image";

export function ComparisonSection() {
  return (
    <section
      id="comparison"
      aria-labelledby="comparison-title"
      className="mt-28 rounded-3xl bg-white p-8 sm:p-12 lg:p-16"
    >
      <div className="max-w-2xl">
        <span className="text-sm font-medium text-[#6b7280]">
          Desktop comparison
        </span>
        <h2
          id="comparison-title"
          className="mt-2 text-3xl font-semibold tracking-tight text-[#0c0d0e] sm:text-4xl"
        >
          Default Windows folder vs Pexelicons folder.
        </h2>
        <p className="mt-3 text-base text-[#4b5563]">
          Compare the standard stock Windows 11 yellow folder against a customized Pexelicons purple Photos folder. Notice how the royal purple colorway and custom glyph create an instant visual anchor.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center justify-between rounded-2xl bg-[#f4f6f8] p-10 text-center">
          <span className="text-xs font-medium text-[#6b7280]">
            Standard Windows 11 yellow folder
          </span>
          <div className="my-10 flex h-36 w-36 items-center justify-center">
            <svg viewBox="0 0 100 80" className="h-32 w-32" aria-hidden="true">
              <path
                d="M6 10 C6 6.7 8.7 4 12 4 L34 4 C37 4 39.5 5.5 41 8 L46 16 L88 16 C91.3 16 94 18.7 94 22 L94 70 C94 73.3 91.3 76 88 76 L12 76 C8.7 76 6 73.3 6 70 Z"
                fill="#F2C100"
              />
              <path
                d="M6 24 C6 21 8.5 18 11.5 18 L88.5 18 C91.5 18 94 21 94 24 L94 70 C94 73.3 91.3 76 88 76 L12 76 C8.7 76 6 73.3 6 70 Z"
                fill="#FFD633"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-base text-[#0c0d0e]">
              Generic system folder
            </h3>
            <p className="mt-1 text-xs text-[#4b5563]">
              Flat yellow styling with zero visual distinction across directories.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between rounded-2xl bg-[#f4f0fa] p-10 text-center">
          <span className="text-xs font-medium text-[#7c3aed]">
            Pexelicons purple Photos folder
          </span>
          <div className="my-10 flex h-36 w-36 items-center justify-center">
            <Image
              src="/icons/purple/Photos.ico"
              alt="Pexelicons purple Photos folder"
              width={128}
              height={128}
              unoptimized
              className="h-32 w-32 object-contain"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base text-[#0c0d0e]">
              Royal purple Photos asset
            </h3>
            <p className="mt-1 text-xs text-[#4b5563]">
              Vivid purple colorway, custom landscape photo insert, and tactile depth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
