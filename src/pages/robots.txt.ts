import { site } from '../data/site';

export function GET() {
  const base = new URL('/', site.settings.siteUrl).toString().replace(/\/$/, '');
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
