import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/portfolio-data";


export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Laravel, Vue.js & AI Builds by Dhanvi Bhadiyadra" },
      {
        name: "description",
        content:
          "Project highlights: Recency CRM, EVSpares e-commerce, Talent UAE finance system, AI booking assistant, Nquiree, PPAY and an IMAP email processing system.",
      },
      { property: "og:title", content: "Projects — Dhanvi Bhadiyadra" },
      {
        property: "og:description",
        content:
          "CRMs, e-commerce platforms, payment modules and AI automations built with Laravel and Vue.js.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        intro="A selection of production work across CRM platforms, e-commerce, finance tools and AI automation."
      />
      <div className="mx-auto grid w-full max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2">
        {projects.map((p, idx) => (
          <Reveal
            key={p.name}
            delay={(idx % 2) * 90}
            className={p.featured ? "md:col-span-2" : undefined}
          >
            <article
              className={`flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                p.featured
                  ? "glass-strong shadow-lift"
                  : "shadow-soft hover:shadow-lift border border-border/70 bg-card"
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">{p.kind}</p>
                {p.featured && (
                  <span className="rounded-full bg-primary px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-primary-foreground uppercase">
                    Featured
                  </span>
                )}
              </div>
              <h2 className="font-display mt-2 text-2xl">{p.name}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
              {p.highlights && (
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              <ul className="mt-5 flex flex-1 flex-wrap items-end gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

    </>
  );
}
