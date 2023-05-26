import { MetadataRoute } from 'next';

const hostname = process.env.HOST_NAME || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${hostname}`,
      lastModified: new Date(),
    },
  ];
}
