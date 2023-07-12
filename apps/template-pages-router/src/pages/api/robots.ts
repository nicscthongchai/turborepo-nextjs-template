import parseJson from 'lib/parseJson';
import type { NextApiRequest, NextApiResponse } from 'next';

const hostname = process.env.NEXT_PUBLIC_HOST_NAME || 'http://localhost:3000';
const enableRobots = parseJson(process.env.ENABLE_ROBOTS);
let robots: string;

const robotsApi = (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'text/plain');
  if (enableRobots) {
    if (!robots) {
      robots = [
        'User-agent: *',
        `Sitemap: ${hostname}/sitemap.xml`,
        `Host: ${hostname.replace(/^http(s*):\/\//, '')}`,
      ].join('\n');
    }
    res.status(200).send(robots);
  } else {
    res.status(200).send('User-agent: *\nDisallow: /');
  }
};

export default robotsApi;
