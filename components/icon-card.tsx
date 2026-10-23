import Image from "next/image";
import { iconUrl, type IconRecord } from "@/app/icon-data";

type IconCardProps = {
  icon: IconRecord;
  isFavorite: boolean;
  isInspected: boolean;
  onSelect: (id: string) => void;
  onToggleFavorite: (id: string) => void;
};

export function IconCard({
  icon,
  isFavorite,
  isInspected,
  onSelect,
  onToggleFavorite,
}: IconCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl p-3 sm:p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#edf1f5] ${
        isInspected ? "bg-[#e8edf2]" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between text-xs text-[#6b7280]">
        <span className="truncate pr-1">{icon.category}</span>
        <span className="capitalize font-medium text-[#4b5563] shrink-0">{icon.color}</span>
      </div>

      <button
        type="button"
        onClick={() => onSelect(icon.id)}
        className="my-2.5 flex cursor-pointer flex-col items-center justify-center text-center focus-visible:outline-2 focus-visible:outline-[#0c0d0e]"
        aria-label={`Inspect ${icon.name} on main stage`}
      >
        <div className="relative h-16 w-16 sm:h-18 sm:w-18 transition-transform duration-300 ease-out group-hover:scale-105 flex items-center justify-center">
          <Image
            src={iconUrl(icon)}
            alt={`${icon.name} folder icon in ${icon.color}`}
            width={72}
            height={72}
            unoptimized
            className="h-full w-full object-contain"
          />
        </div>
        <h3 className="mt-1.5 truncate font-medium text-xs sm:text-sm text-[#0c0d0e]">
          {icon.name}
        </h3>
      </button>

      <div className="flex items-center justify-between pt-2 gap-1.5 sm:gap-2">
        <a
          href={iconUrl(icon)}
          download={icon.file}
          aria-label={`Get ${icon.name} ICO`}
          title="Get ICO"
          className="group/btn flex min-h-[36px] flex-1 min-w-0 items-center justify-center gap-1 sm:gap-1.5 rounded-xl bg-[#f4f6f8] px-2 sm:px-3 text-xs font-semibold text-[#0c0d0e] transition-colors hover:bg-[#0c0d0e] hover:!text-white focus-visible:outline-2 focus-visible:outline-[#0c0d0e]"
        >
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="h-3.5 w-3.5 shrink-0 fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round transition-colors group-hover/btn:!stroke-white"
          >
            <path d="M10 2.5v9m0 0 3.5-3.5M10 11.5 6.5 8M3.5 13.5v3h13v-3" />
          </svg>
          <span className="transition-colors group-hover/btn:!text-white">
            ICO
          </span>
        </a>

        <button
          type="button"
          onClick={() => onToggleFavorite(icon.id)}
          aria-label={`${isFavorite ? "Remove" : "Save"} ${icon.name} from favorites`}
          aria-pressed={isFavorite}
          className={`group/fav cursor-pointer flex h-9 w-9 min-h-[36px] min-w-[36px] shrink-0 items-center justify-center rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-[#0c0d0e] ${
            isFavorite
              ? "bg-[#0c0d0e] text-[#f5a623]"
              : "bg-[#f4f6f8] text-[#4b5563] hover:bg-[#0c0d0e] hover:!text-white"
          }`}
          title={isFavorite ? "Remove favorite" : "Save favorite"}
        >
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={`h-4 w-4 shrink-0 transition-colors ${
              isFavorite
                ? "fill-current"
                : "fill-none stroke-current stroke-[2] group-hover/fav:!stroke-white"
            }`}
          >
            <path d="m10 2.4 2.2 4.45 4.9.71-3.55 3.46.84 4.88L10 13.6l-4.39 2.3.84-4.88L2.9 7.56l4.9-.71L10 2.4Z" />
          </svg>
        </button>
      </div>
    </article>
  );
}
