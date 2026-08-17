import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/site-shell";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Hire a Freelance Laravel Developer — Contact Dhanvi" },
      {
        name: "description",
        content:
          "Get in touch with Dhanvi Bhadiyadra for Laravel, PHP, Vue.js, CRM and automation projects. Based in Surat, Gujarat and available for freelance work worldwide.",
      },
      { property: "og:title", content: "Contact Dhanvi Bhadiyadra" },
      {
        property: "og:description",
        content: "Available for freelance Laravel, PHP, Vue.js and automation projects.",
      },
      { property: "og:url", content: "https://dhanvi-portfolio.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://dhanvi-portfolio.lovable.app/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "dhanvi-bhadiyadara", href: profile.linkedin },
    { icon: MapPin, label: "Location", value: profile.location, href: undefined },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something"
        intro="Available for freelance Laravel and Vue.js projects, CRM builds, API integrations and automation work."
      />
      <div className="mx-auto grid w-full max-w-4xl gap-4 px-6 pb-24 sm:grid-cols-2">
        {items.map((i) => (
          <div key={i.label} className="shadow-soft rounded-2xl border border-border/70 bg-card p-6">
            <i.icon className="size-5 text-primary" />
            <p className="mt-4 text-xs tracking-[0.18em] text-muted-foreground uppercase">
              {i.label}
            </p>
            {i.href ? (
              <a
                href={i.href}
                target={i.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="mt-1 block break-all font-medium hover:text-primary"
              >
                {i.value}
              </a>
            ) : (
              <p className="mt-1 font-medium">{i.value}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
