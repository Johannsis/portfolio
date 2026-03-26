import 'server-only';

import type { MetadataRoute } from 'next';

import { siteUrl } from '@jh/data/user';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: 'yearly',
      lastModified: new Date(),
      priority: 1,
      url: siteUrl,
    },
  ];
}
