import type { RefObject } from "react";
import type { IconCategory, IconColor } from "@/app/icon-data";

export type CategoryFilter = "All icons" | IconCategory;
export type ViewMode = "gallery" | "list";

type CatalogFiltersProps = {
  searchRef: RefObject<HTMLInputElement | null>;
  query: string;
  onQueryChange: (q: string) => void;
  color: IconColor | "all";
  colors: Array<IconColor | "all">;
  onColorChange: (color: IconColor | "all") => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  category: CategoryFilter;
  categories: CategoryFilter[];
  onCategoryChange: (cat: CategoryFilter) => void;
  favoritesOnly: boolean;
  onToggleFavoritesOnly: () => void;
  favoritesCount: number;
};

export function CatalogFilters({
  searchRef,
  query,
  onQueryChange,
  color,
  colors,
  onColorChange,
  viewMode,
  onViewModeChange,
  category,
  categories,
  onCategoryChange,
  favoritesOnly,
  onToggleFavoritesOnly,
  favoritesCount,
}: CatalogFiltersProps) {
  return (
    <div className="mt-8 rounded-2xl bg-white p-3 sm:p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <label
          style={{ outline: "none", boxShadow: "none", border: "none" }}
          className="flex min-h-[46px] flex-1 items-center gap-3 rounded-xl bg-[#f4f6f8] px-4 lg:max-w-md border-0 outline-none ring-0 shadow-none focus-within:outline-none focus-within:ring-0 focus-within:border-0"
        >
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="h-4 w-4 shrink-0 fill-none stroke-[#6b7280] stroke-[2]"
          >
            <circle cx="8.5" cy="8.5" r="5.5" />
            <path d="m13 13 4 4" />
          </svg>
          <input
            ref={searchRef}
            type="search"
            placeholder="Search collection (Press / to focus)"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            aria-label="Search by icon name, colorway, or category"
            style={{ outline: "none", boxShadow: "none", border: "none" }}
            className="min-w-0 flex-1 bg-transparent text-sm text-[#0c0d0e] placeholder:text-[#6b7280] border-none outline-none ring-0 shadow-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus:border-none"
          />
          {query ? (
            <button
              type="button"
              aria-label="Clear search query"
              onClick={() => onQueryChange("")}
              className="flex min-h-[44px] min-w-[36px] items-center justify-center text-sm text-[#4b5563] hover:text-[#0c0d0e]"
            >
              ×
            </button>
          ) : (
            <kbd
              aria-label="Press slash to search"
              className="hidden rounded bg-[#e8ecf0] px-2 py-0.5 text-xs text-[#4b5563] sm:inline-block"
            >
              /
            </kbd>
          )}
        </label>

        <div className="flex flex-wrap items-center gap-2">
          <div
            role="group"
            aria-label="Filter by colorway"
            className="flex rounded-xl bg-[#f4f6f8] p-1 gap-1"
          >
            {colors.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => onColorChange(c)}
                aria-pressed={color === c}
                className={`flex min-h-[38px] cursor-pointer items-center gap-1.5 rounded-lg px-3.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#0c0d0e] ${
                  color === c
                    ? "bg-[#0c0d0e] text-white"
                    : "text-[#4b5563] hover:text-[#0c0d0e] hover:bg-[#e4e8ee]"
                }`}
              >
                <span>
                  {c === "all"
                    ? "All colors"
                    : c[0].toUpperCase() + c.slice(1)}
                </span>
              </button>
            ))}
          </div>

          <div
            role="group"
            aria-label="Catalog view mode"
            className="flex rounded-xl bg-[#f4f6f8] p-1 gap-1"
          >
            <button
              type="button"
              onClick={() => onViewModeChange("gallery")}
              aria-label="Gallery view"
              title="Gallery view"
              aria-pressed={viewMode === "gallery"}
              className={`flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-lg text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#0c0d0e] ${
                viewMode === "gallery"
                  ? "bg-[#0c0d0e] text-white"
                  : "text-[#4b5563] hover:text-[#0c0d0e] hover:bg-[#e4e8ee]"
              }`}
            >
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="h-3.5 w-3.5 fill-current"
              >
                <rect x="1" y="1" width="6" height="6" rx="1" />
                <rect x="9" y="1" width="6" height="6" rx="1" />
                <rect x="1" y="9" width="6" height="6" rx="1" />
                <rect x="9" y="9" width="6" height="6" rx="1" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange("list")}
              aria-label="List view"
              title="List view"
              aria-pressed={viewMode === "list"}
              className={`flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-lg text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#0c0d0e] ${
                viewMode === "list"
                  ? "bg-[#0c0d0e] text-white"
                  : "text-[#4b5563] hover:text-[#0c0d0e] hover:bg-[#e4e8ee]"
              }`}
            >
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="h-3.5 w-3.5 fill-current"
              >
                <path d="M1 2.5h14v2H1zm0 5h14v2H1zm0 5h14v2H1z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-col justify-between gap-3 pt-2 sm:flex-row sm:items-center">
        <div
          role="group"
          aria-label="Filter by category"
          className="flex flex-wrap gap-1"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              aria-pressed={category === cat}
              className={`min-h-[40px] cursor-pointer rounded-lg px-3.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#0c0d0e] ${
                category === cat
                  ? "bg-[#0c0d0e] text-white"
                  : "text-[#4b5563] hover:text-[#0c0d0e] hover:bg-[#edf0f4]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onToggleFavoritesOnly}
          aria-pressed={favoritesOnly}
          className={`flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg px-3.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#0c0d0e] ${
            favoritesOnly
              ? "bg-[#0c0d0e] text-[#f5a623]"
              : "bg-[#f4f6f8] text-[#4b5563] hover:bg-[#0c0d0e] hover:text-white"
          }`}
        >
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            className={`h-4 w-4 ${
              favoritesOnly
                ? "fill-current"
                : "fill-none stroke-current stroke-[2]"
            }`}
          >
            <path d="m10 2.4 2.2 4.45 4.9.71-3.55 3.46.84 4.88L10 13.6l-4.39 2.3.84-4.88L2.9 7.56l4.9-.71L10 2.4Z" />
          </svg>
          <span>Saved ({favoritesCount})</span>
        </button>
      </div>
    </div>
  );
}
