"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { icons, type IconColor } from "./icon-data";
import { IconCard } from "@/components/icon-card";
import { IconRow } from "@/components/icon-row";
import { SpecimenViewer } from "@/components/specimen-viewer";
import {
  CatalogFilters,
  type CategoryFilter,
  type ViewMode,
} from "@/components/catalog-filters";
import { EmptyState } from "@/components/empty-state";

const categories: CategoryFilter[] = ["All icons", "Work", "Media", "System"];
const colors: Array<IconColor | "all"> = ["all", "yellow", "purple"];
const FAVORITES_KEY = "pexelicons:favorites";
const SCALE_STEPS = [16, 24, 32, 48, 64, 96, 128, 256] as const;

let memoryFavorites: string[] = [];

function getFavoriteSnapshot() {
  try {
    const saved = window.localStorage.getItem(FAVORITES_KEY);
    if (saved) {
      const parsed: unknown = JSON.parse(saved);
      if (
        Array.isArray(parsed) &&
        parsed.every((value) => typeof value === "string")
      ) {
        memoryFavorites = parsed;
      }
    }
  } catch {
  }
  return JSON.stringify(memoryFavorites);
}

function subscribeToFavorites(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("pexelicons:favorites-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("pexelicons:favorites-change", callback);
  };
}

function saveFavorites(next: string[]) {
  memoryFavorites = next;
  try {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
  } catch {
  }
  window.dispatchEvent(new Event("pexelicons:favorites-change"));
}

export default function Catalog() {
  const [query, setQuery] = useState("");
  const [color, setColor] = useState<IconColor | "all">("all");
  const [category, setCategory] = useState<CategoryFilter>("All icons");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("gallery");
  const [activeSpecimenId, setActiveSpecimenId] = useState<string>(
    "yellow-GamesYellow.ico",
  );
  const [scaleIndex, setScaleIndex] = useState<number>(6);
  const inspectedScale = SCALE_STEPS[scaleIndex];

  const searchRef = useRef<HTMLInputElement>(null);

  const favoriteSnapshot = useSyncExternalStore(
    subscribeToFavorites,
    getFavoriteSnapshot,
    () => "[]",
  );
  const favorites = useMemo(
    () => JSON.parse(favoriteSnapshot) as string[],
    [favoriteSnapshot],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }
      if (
        (event.target as HTMLElement).matches(
          "input, textarea, select, [contenteditable='true']",
        )
      ) {
        return;
      }
      event.preventDefault();
      searchRef.current?.focus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const visibleIcons = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return icons.filter(
      (icon) =>
        (color === "all" || icon.color === color) &&
        (category === "All icons" || icon.category === category) &&
        (!favoritesOnly || favorites.includes(icon.id)) &&
        (!normalizedQuery ||
          `${icon.name} ${icon.color} ${icon.category} ${icon.file}`
            .toLowerCase()
            .includes(normalizedQuery)),
    );
  }, [category, color, favorites, favoritesOnly, query]);

  const activeSpecimen = useMemo(() => {
    const found = icons.find((item) => item.id === activeSpecimenId);
    return found || icons[0];
  }, [activeSpecimenId]);

  const toggleFavorite = (id: string) => {
    saveFavorites(
      favorites.includes(id)
        ? favorites.filter((favoriteId) => favoriteId !== id)
        : [...favorites, id],
    );
  };

  const clearFilters = () => {
    setQuery("");
    setColor("all");
    setCategory("All icons");
    setFavoritesOnly(false);
  };

  const hasFilters = Boolean(
    query ||
    color !== "all" ||
    category !== "All icons" ||
    favoritesOnly,
  );

  return (
    <div className="space-y-20">
      <SpecimenViewer
        activeSpecimen={activeSpecimen}
        scaleIndex={scaleIndex}
        inspectedScale={inspectedScale}
        steps={SCALE_STEPS}
        onScaleChange={setScaleIndex}
        isFavorite={favorites.includes(activeSpecimen.id)}
        onToggleFavorite={toggleFavorite}
        quickSelectIcons={icons.slice(0, 8)}
        onSelectSpecimen={setActiveSpecimenId}
      />

      <section id="collection" aria-label="Icon catalog and collection">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-medium text-[#4b5563]">
              Complete collection of 30 icons
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#0c0d0e] sm:text-4xl lg:text-5xl">
              Browse the icons.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#4b5563]">
            Explore both yellow and purple colorways. Search by name, filter by
            category, or switch between gallery and compact list.
          </p>
        </div>

        <CatalogFilters
          searchRef={searchRef}
          query={query}
          onQueryChange={setQuery}
          color={color}
          colors={colors}
          onColorChange={setColor}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          category={category}
          categories={categories}
          onCategoryChange={setCategory}
          favoritesOnly={favoritesOnly}
          onToggleFavoritesOnly={() => setFavoritesOnly((prev) => !prev)}
          favoritesCount={favorites.length}
        />

        <div
          className="mt-6 flex min-h-[36px] items-center justify-between text-xs text-[#4b5563]"
          aria-live="polite"
        >
          <p>
            Showing{" "}
            <strong className="text-[#0c0d0e]">{visibleIcons.length}</strong> of
            30 icons
            {query ? (
              <span>
                {" "}
                matching &ldquo;<span className="text-[#0c0d0e]">{query}</span>
                &rdquo;
              </span>
            ) : null}
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="min-h-[44px] text-[#0c0d0e] font-medium underline underline-offset-4 hover:text-[#4b5563]"
            >
              Reset filters
            </button>
          )}
        </div>

        <div className="mt-6">
          {visibleIcons.length === 0 ? (
            <EmptyState
              favoritesOnly={favoritesOnly}
              favoritesCount={favorites.length}
              onClearFilters={clearFilters}
            />
          ) : viewMode === "gallery" ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {visibleIcons.map((icon) => {
                const isFavorite = favorites.includes(icon.id);
                const isInspected = activeSpecimenId === icon.id;

                return (
                  <IconCard
                    key={icon.id}
                    icon={icon}
                    isFavorite={isFavorite}
                    isInspected={isInspected}
                    onSelect={setActiveSpecimenId}
                    onToggleFavorite={toggleFavorite}
                  />
                );
              })}
            </div>
          ) : (
            <div className="space-y-2">
              {visibleIcons.map((icon) => {
                const isFavorite = favorites.includes(icon.id);
                return (
                  <IconRow
                    key={icon.id}
                    icon={icon}
                    isFavorite={isFavorite}
                    onSelect={setActiveSpecimenId}
                    onToggleFavorite={toggleFavorite}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
