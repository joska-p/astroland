import type { APIRoute } from "astro";

const environment = import.meta.env.SITE === "https://www.potineizner.com" ? "production" : "development";

let getRobotsTxt;

if (environment === "production") {
  getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;
} else {
  getRobotsTxt = () => `
User-agent: *
Disallow: /
`;
}

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
