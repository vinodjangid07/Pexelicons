import { Wordmark } from "@/components/wordmark";

export function Footer() {
  return (
    <footer className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start">
          <div className="max-w-sm space-y-4">
            <Wordmark />
            <p className="text-sm leading-relaxed text-[#4b5563]">
              A free collection of 30 custom 32-bit Windows folder icons in saturated honey yellow and royal purple colorways.
            </p>
            <p className="text-sm text-[#4b5563]">
              Designed and built by{" "}
              <a
                href="https://github.com/vinodjangid07"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
                className="font-medium text-[#0c0d0e] transition-colors hover:text-[#4b5563]"
              >
                Vinod Jangid
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-16 sm:gap-24 text-sm">
            <div className="space-y-4">
              <span className="block text-xs font-semibold text-[#0c0d0e]">
                Navigation
              </span>
              <ul className="space-y-3 text-[#4b5563]">
                <li>
                  <a
                    href="#specimen"
                    className="inline-block transition-colors hover:text-[#0c0d0e]"
                  >
                    Specimen
                  </a>
                </li>
                <li>
                  <a
                    href="#collection"
                    className="inline-block transition-colors hover:text-[#0c0d0e]"
                  >
                    Collection
                  </a>
                </li>
                <li>
                  <a
                    href="#comparison"
                    className="inline-block transition-colors hover:text-[#0c0d0e]"
                  >
                    Comparison
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="block text-xs font-semibold text-[#0c0d0e]">
                Project
              </span>
              <ul className="space-y-3 text-[#4b5563]">
                <li>
                  <a
                    href="https://github.com/vinodjangid07/Pexelicons"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block transition-colors hover:text-[#0c0d0e]"
                  >
                    GitHub repository
                  </a>
                </li>
                <li>
                  <span className="text-[#6b7280]">Free under MIT</span>
                </li>
                <li>
                  <span className="text-[#6b7280]">Windows 10 &amp; 11</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 text-xs text-[#6b7280]">
          <p>© 2026 Pexelicons. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
