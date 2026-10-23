export type IconColor = "yellow" | "purple";
export type IconCategory = "Work" | "Media" | "System";
export type IconRecord = {
  id: string;
  name: string;
  file: string;
  color: IconColor;
  category: IconCategory;
};

const sets: Record<IconColor, Array<[string, string, IconCategory]>> = {
  yellow: [
    ["Games", "GamesYellow.ico", "Media"],
    ["Coding", "CodingYellow.ico", "Work"],
    ["Desktop", "DesktopYellow.ico", "System"],
    ["Documents", "DocumentsYellow.ico", "Work"],
    ["Downloads", "DownloadsYellow.ico", "Work"],
    ["Editing", "EditingYellow.ico", "Work"],
    ["Music", "MusicYellow.ico", "Media"],
    ["Photos", "PhotosYellow.ico", "Media"],
    ["Photos 2", "Photos2Yellow.ico", "Media"],
    ["Video", "VideoYellow.ico", "Media"],
    ["Video 2", "Video2Yellow.ico", "Media"],
    ["Recycle Bin Empty", "Recyle Bin Empty.ico", "System"],
    ["Recycle Bin Full", "Recyle Bin Full.ico", "System"],
    ["This PC", "This PC.ico", "System"],
    ["This PC 2", "This PC 2.ico", "System"],
  ],
  purple: [
    ["Games", "Game.ico", "Media"],
    ["Coding", "Coding.ico", "Work"],
    ["Default", "Default.ico", "System"],
    ["Desktop", "Desktop.ico", "System"],
    ["Documents", "Documents.ico", "Work"],
    ["Downloads", "Download.ico", "Work"],
    ["Editing", "Editing.ico", "Work"],
    ["Music", "Music.ico", "Media"],
    ["Photos", "Photos.ico", "Media"],
    ["Video", "Video.ico", "Media"],
    ["Recycle Bin Empty", "Recycle Bin Empty.ico", "System"],
    ["Recycle Bin Full", "Recyle Bin Full.ico", "System"],
    ["This PC", "This PC.ico", "System"],
    ["This PC 2", "This PC 2.ico", "System"],
    ["This PC 3", "This PC 3.ico", "System"],
  ],
};

export const icons: IconRecord[] = Object.entries(sets).flatMap(([color, entries]) =>
  entries.map(([name, file, category]) => ({
    id: `${color}-${file}`,
    name,
    file,
    color: color as IconColor,
    category,
  })),
);

export function iconUrl(icon: Pick<IconRecord, "color" | "file">) {
  return `/icons/${icon.color}/${encodeURIComponent(icon.file)}`;
}
