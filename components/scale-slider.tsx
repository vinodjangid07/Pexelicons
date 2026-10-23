type ScaleSliderProps = {
  scaleIndex: number;
  inspectedScale: number;
  steps: readonly number[];
  onScaleChange: (index: number) => void;
};

export function ScaleSlider({
  scaleIndex,
  inspectedScale,
  steps,
  onScaleChange,
}: ScaleSliderProps) {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-3.5 sm:p-4">
      <div className="flex items-center justify-between text-xs font-medium text-[#4b5563]">
        <span className="font-semibold text-[#0c0d0e]">Scale preview</span>
        <span className="rounded-lg bg-[#0c0d0e] px-2 py-0.5 text-xs font-semibold text-white">
          {inspectedScale}px
        </span>
      </div>

      <div className="relative mt-2.5 px-0.5">
        <input
          type="range"
          min="0"
          max={steps.length - 1}
          step="1"
          value={scaleIndex}
          onChange={(e) => onScaleChange(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#e8ecf0] accent-[#0c0d0e]"
          aria-label="Adjust icon scale preview slider"
        />
      </div>

      <div className="mt-2.5 flex items-center justify-between gap-0.5 text-[10px] sm:text-[11px]">
        {steps.map((size, idx) => (
          <button
            key={size}
            type="button"
            onClick={() => onScaleChange(idx)}
            className={`min-w-0 flex-1 cursor-pointer rounded py-1 text-center transition-colors ${
              scaleIndex === idx
                ? "font-bold text-[#0c0d0e] bg-[#f4f6f8]"
                : "text-[#6b7280] hover:text-[#0c0d0e]"
            }`}
            aria-label={`Set scale to ${size} pixels`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
