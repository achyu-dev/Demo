import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://roognis.netlify.app";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/why`, lastModified: new Date() },
    { url: `${base}/customers`, lastModified: new Date() },
  ];
}
