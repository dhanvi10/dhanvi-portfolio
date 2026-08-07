import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-shell";
import { experience } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Dhanvi Bhadiyadra, Laravel Developer" },
      {
        name: "description",
        content:
          "Professional experience of Dhanvi Bhadiyadra at PlanicsDev Infotech, AR Team Software Solutions and as a freelance full-stack developer since February 2023.",
      },
      { property: "og:title", content: "Experience — Dhanvi Bhadiyadra" },
      {
        property: "og:description",
        content:
          "Three years of Laravel and Vue.js work across agency, product and freelance roles.",
      },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Three years of shipping"
        intro="From agency CRM work to AI-powered products and independent client projects."
      />
      <div className="mx-auto w-full max-w-4xl px-6 pb-24">
        <ol className="space-y-10 border-l border-border pl-8">
          {experience.map((e) => (
            <li key={e.company} className="relative">
              <span className="absolute -left-[2.35rem] top-1.5 size-3 rounded-full bg-primary ring-4 ring-background" />
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                {e.period}
              </p>
              <h2 className="font-display mt-2 text-2xl">{e.company}</h2>
              <p className="text-sm text-muted-foreground">{e.role}</p>
              <ul className="mt-4 space-y-2">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
