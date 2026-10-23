import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pexelicons.vinodjangid.site",
      lastModified: "2026-10-23",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
