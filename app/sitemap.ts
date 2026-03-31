import { siteConfig } from "../utils/siteConfig";

export default function sitemap() {
  const baseUrl = siteConfig.siteUrl;
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/vendor-dashboard`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/admin`,
      lastModified: new Date()
    }
  ];
}

