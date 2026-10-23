import Image from "next/image";
import { iconUrl, type IconRecord } from "@/app/icon-data";
import { ScaleSlider } from "@/components/scale-slider";

type SpecimenViewerProps = {
  activeSpecimen: IconRecord;
  scaleIndex: number;
  inspectedScale: number;
  steps: readonly number[];
  onScaleChange: (index: number) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  quickSelectIcons: IconRecord[];
  onSelectSpecimen: (id: string) => void;
};

export function SpecimenViewer({
  activeSpecimen,
  scaleIndex,
  inspectedScale,
  steps,
  onScaleChange,
  isFavorite,
  onToggleFavorite,
  quickSelectIcons,
  onSelectSpecimen,
}: SpecimenViewerProps) {
  return (
    <section
      id="specimen"
      aria-label="Active icon specimen sheet and scale inspector"
      className="rounded-3xl bg-white p-4 sm:p-10 lg:p-14"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="flex h-full flex-col items-center justify-center gap-5 rounded-2xl bg-[#f4f6f8] p-4 sm:p-8">
          <div className="flex flex-col items-center justify-center">
            <div
              className="transition-all duration-200 ease-out"
              style={{
                width: `${inspectedScale}px`,
                height: `${inspectedScale}px`,
                maxWidth: "100%",
              }}
            >
              <Image
                src={iconUrl(activeSpecimen)}
                alt={`${activeSpecimen.name} Windows folder icon in ${activeSpecimen.color}`}
                width={inspectedScale}
                height={inspectedScale}
                unoptimized
                priority
                className="h-full w-full object-contain"
              />
            </div>

            <div className="text-center mt-3">
              <span className="text-xl font-semibold tracking-tight text-[#0c0d0e]">
                {activeSpecimen.name}
              </span>
              <p className="mt-1 text-sm text-[#4b5563]">
                {activeSpecimen.file}
              </p>
            </div>
          </div>

          <ScaleSlider
            scaleIndex={scaleIndex}
            inspectedScale={inspectedScale}
            steps={steps}
            onScaleChange={onScaleChange}
          />
        </div>

        <div className="flex flex-col justify-between space-y-7">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-medium text-[#4b5563]">
                {activeSpecimen.color === "yellow"
                  ? "Honey yellow"
                  : "Royal purple"}{" "}
                colorway • {activeSpecimen.category}
              </span>
              <h2 className="mt-1 text-3xl font-semibold tracking-tight text-[#0c0d0e] sm:text-4xl lg:text-5xl">
                {activeSpecimen.name}
              </h2>
            </div>

            <p className="max-w-lg text-base leading-relaxed text-[#4b5563]">
              Precision-rendered 32-bit ICO resource with 9 embedded mipmap
              frames. Stays crisp and tactile across every Windows display
              scale from taskbar to extra-large desktop view.
            </p>

            <div className="grid grid-cols-2 gap-4 rounded-xl bg-[#f4f6f8] p-4 sm:p-5 text-xs">
              <div>
                <span className="block text-[11px] text-[#6b7280]">
                  Format
                </span>
                <span className="font-medium text-[#0c0d0e]">
                  Windows ICO (32bpp)
                </span>
              </div>
              <div>
                <span className="block text-[11px] text-[#6b7280]">
                  Max resolution
                </span>
                <span className="font-medium text-[#0c0d0e]">
                  256 x 256 Native
                </span>
              </div>
              <div>
                <span className="block text-[11px] text-[#6b7280]">
                  Target OS
                </span>
                <span className="font-medium text-[#0c0d0e]">
                  Windows 11 and 10
                </span>
              </div>
              <div>
                <span className="block text-[11px] text-[#6b7280]">
                  Category
                </span>
                <span className="font-medium text-[#0c0d0e]">
                  {activeSpecimen.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={iconUrl(activeSpecimen)}
                download={activeSpecimen.file}
                style={{ color: "#ffffff", backgroundColor: "#0c0d0e" }}
                className="flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl px-5 sm:px-7 font-medium text-sm transition-colors hover:bg-[#252830] focus-visible:outline-2 focus-visible:outline-[#0c0d0e]"
              >
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 fill-none stroke-white stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M10 2.5v9m0 0 3.5-3.5M10 11.5 6.5 8M3.5 13.5v3h13v-3" />
                </svg>
                <span style={{ color: "#ffffff" }} className="text-white truncate">
                  {activeSpecimen.color === "yellow" ? "Yellow" : "Purple"}{" "}
                  {activeSpecimen.name} ICO
                </span>
              </a>

              <button
                type="button"
                onClick={() => onToggleFavorite(activeSpecimen.id)}
                aria-pressed={isFavorite}
                className={`flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#0c0d0e] ${
                  isFavorite
                    ? "bg-[#0c0d0e] text-[#f5a623]"
                    : "bg-[#edf0f4] text-[#0c0d0e] hover:bg-[#0c0d0e] hover:text-white"
                }`}
              >
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className={`h-4 w-4 shrink-0 ${
                    isFavorite
                      ? "fill-current"
                      : "fill-none stroke-current stroke-[2]"
                  }`}
                >
                  <path d="m10 2.4 2.2 4.45 4.9.71-3.55 3.46.84 4.88L10 13.6l-4.39 2.3.84-4.88L2.9 7.56l4.9-.71L10 2.4Z" />
                </svg>
                <span>
                  {isFavorite ? "Saved in browser" : "Save favorite"}
                </span>
              </button>
            </div>
          </div>

          <div className="pt-2">
            <span className="block text-xs font-medium text-[#4b5563]">
              Choose a folder to test:
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {quickSelectIcons.map((icon) => (
                <button
                  key={icon.id}
                  type="button"
                  onClick={() => onSelectSpecimen(icon.id)}
                  className={`flex min-h-[44px] items-center gap-2 rounded-xl px-3.5 text-xs font-medium transition-colors cursor-pointer ${
                    activeSpecimen.id === icon.id
                      ? "bg-[#0c0d0e] text-white"
                      : "bg-[#edf0f4] text-[#0c0d0e] hover:bg-[#0c0d0e] hover:text-white"
                  }`}
                >
                  <Image
                    src={iconUrl(icon)}
                    alt=""
                    width={20}
                    height={20}
                    unoptimized
                    className="h-5 w-5 object-contain"
                  />
                  <span>{icon.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
