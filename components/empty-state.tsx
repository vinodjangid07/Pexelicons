type EmptyStateProps = {
  favoritesOnly: boolean;
  favoritesCount: number;
  onClearFilters: () => void;
};

export function EmptyState({
  favoritesOnly,
  favoritesCount,
  onClearFilters,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl bg-white p-10 text-center">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-10 w-10 stroke-[#6b7280] fill-none stroke-[1.5]"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <h3 className="mt-4 text-xl font-semibold text-[#0c0d0e]">
        {favoritesOnly && favoritesCount === 0
          ? "No saved icons yet"
          : "No matching icons found"}
      </h3>
      <p className="mt-2 max-w-sm text-sm text-[#4b5563]">
        {favoritesOnly && favoritesCount === 0
          ? "Save your preferred icons with the star button and they will be collected here."
          : "Try another search term or clear active filters to see the full collection."}
      </p>
      <button
        type="button"
        onClick={onClearFilters}
        className="mt-6 flex min-h-[44px] items-center rounded-xl bg-[#0c0d0e] px-6 font-medium text-xs text-white transition-colors hover:bg-[#252830] focus-visible:outline-2 focus-visible:outline-[#0c0d0e]"
      >
        Show all icons
      </button>
    </div>
  );
}
