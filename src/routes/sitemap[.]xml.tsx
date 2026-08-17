import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL, servicePages } from "@/lib/service-pages";

const routes = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.8" },
  { path: "/experience", priority: "0.8" },
  { path: "/projects", priority: "0.8" },
  { path: "/contact", priority: "0.6" },
  ...servicePages.map((p) => ({ path: `/${p.slug}`, priority: "0.9" })),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <priority>${r.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
