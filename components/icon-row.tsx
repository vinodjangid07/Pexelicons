import Image from "next/image";
import { iconUrl, type IconRecord } from "@/app/icon-data";

type IconRowProps = {
  icon: IconRecord;
  isFavorite: boolean;
  onSelect: (id: string) => void;
  onToggleFavorite: (id: string) => void;
};

export function IconRow({
  icon,
  isFavorite,
  onSelect,
  onToggleFavorite,
}: IconRowProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white px-5 py-3 transition-colors hover:bg-[#ebf0f5]">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => onSelect(icon.id)}
          className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f4f6f8] focus-visible:outline-2 focus-visible:outline-[#0c0d0e]"
          aria-label={`Inspect ${icon.name} icon`}
        >
          <Image
            src={iconUrl(icon)}
            alt=""
            width={32}
            height={32}
            unoptimized
            className="h-8 w-8 object-contain"
          />
        </button>
        <div>
          <span className="font-medium text-sm text-[#0c0d0e]">
            {icon.name}
          </span>
          <div className="flex items-center gap-2 text-xs text-[#6b7280]">
            <span>{icon.file}</span>
            <span>•</span>
            <span className="capitalize">{icon.color}</span>
            <span>•</span>
            <span>{icon.category}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={iconUrl(icon)}
          download={icon.file}
          className="group/listbtn flex min-h-[44px] items-center gap-2 rounded-xl bg-[#f4f6f8] px-4 text-xs font-semibold text-[#0c0d0e] transition-colors hover:bg-[#0c0d0e] hover:!text-white focus-visible:outline-2 focus-visible:outline-[#0c0d0e]"
          aria-label={`Get ${icon.name} ICO`}
        >
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="h-3.5 w-3.5 fill-none stroke-current stroke-[2] transition-colors group-hover/listbtn:!stroke-white"
          >
            <path d="M10 2.5v9m0 0 3.5-3.5M10 11.5 6.5 8M3.5 13.5v3h13v-3" />
          </svg>
          <span className="transition-colors group-hover/listbtn:!text-white">
            Get ICO
          </span>
        </a>

        <button
          type="button"
          onClick={() => onToggleFavorite(icon.id)}
          aria-label={`${isFavorite ? "Remove" : "Save"} ${icon.name}`}
          aria-pressed={isFavorite}
          className={`group/listfav flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-[#0c0d0e] ${
            isFavorite
              ? "bg-[#0c0d0e] text-[#f5a623]"
              : "bg-[#f4f6f8] text-[#4b5563] hover:bg-[#0c0d0e] hover:!text-white"
          }`}
        >
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={`h-4 w-4 transition-colors ${
              isFavorite
                ? "fill-current"
                : "fill-none stroke-current stroke-[2] group-hover/listfav:!stroke-white"
            }`}
          >
            <path d="m10 2.4 2.2 4.45 4.9.71-3.55 3.46.84 4.88L10 13.6l-4.39 2.3.84-4.88L2.9 7.56l4.9-.71L10 2.4Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
