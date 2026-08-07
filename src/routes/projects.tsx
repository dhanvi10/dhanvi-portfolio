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
        {projects.map((p) => (
          <article
            key={p.name}
            className="shadow-soft hover:shadow-lift flex flex-col rounded-2xl border border-border/70 bg-card p-7 transition-shadow"
          >
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">{p.kind}</p>
            <h2 className="font-display mt-2 text-2xl">{p.name}</h2>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
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
        ))}
      </div>
    </>
  );
}
