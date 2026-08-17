import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView } from "@/components/service-page";
import { SITE_URL, getServicePage } from "@/lib/service-pages";

const page = getServicePage("full-stack-developer");
const url = `${SITE_URL}/${page.slug}`;

export const Route = createFileRoute("/full-stack-developer")({
  head: () => ({
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Full-stack web development",
          name: "Full-stack developer (Laravel + Vue.js)",
          description: page.description,
          url,
          areaServed: "Worldwide",
          provider: {
            "@type": "Person",
            name: "Dhanvi Bhadiyadra",
            jobTitle: "Full-Stack Developer",
            url: SITE_URL,
          },
        }),
      },
    ],
  }),
  component: () => <ServicePageView page={page} />,
});
