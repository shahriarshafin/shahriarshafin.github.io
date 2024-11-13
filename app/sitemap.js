import { BASE_URL } from '../lib/constants';

export default async function sitemap() {
  const routes = ['', '/about', '/projects', '/open-source'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString()
  }));

  return [...routes];
}
