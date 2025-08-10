import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.iamhasnat.com';
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Note: Hash fragments (#about, #skills, etc.) are not valid in XML sitemaps
    // since they all point to the same page. The sections are accessible through
    // the main page URL and navigation.
  ];
}
