import parseJson from 'lib/parseJson';
import { MetadataRoute } from 'next';

const enableRobots = parseJson(process.env.ENABLE_ROBOTS);

export default function robots(): MetadataRoute.Robots {
  if (!enableRobots) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
  };
}
