import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-shell";
import { education, languages, profile, skillGroups } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Laravel & Vue.js Developer | Dhanvi Bhadiyadra" },
      {
        name: "description",
        content:
          "Background, education and skills of Dhanvi Bhadiyadra: Laravel, PHP, Vue.js, API integrations, automation and a Master's in Generative AI at SRM University.",
      },
      { property: "og:title", content: "About Dhanvi Bhadiyadra — Laravel Developer" },
      {
        property: "og:description",
        content:
          "Laravel & Vue.js developer since Feb 2023, now studying Generative AI at SRM University.",
      },
      { property: "og:url", content: "https://dhanvi-portfolio.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://dhanvi-portfolio.lovable.app/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About" title="Hi, I'm Dhanvi." intro={profile.summary} />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-24 md:grid-cols-[1.3fr_1fr]">
        <section>
          <h2 className="font-display text-2xl">Education</h2>
          <ul className="mt-6 space-y-6 border-l border-border pl-6">
            {education.map((e) => (
              <li key={e.degree} className="relative">
                <span className="absolute -left-[1.9rem] top-2 size-2.5 rounded-full bg-primary" />
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  {e.period}
                </p>
              </li>
            ))}
          </ul>

          <h2 className="font-display mt-14 text-2xl">Skills in detail</h2>
          <div className="mt-6 space-y-5">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-primary">
                  {g.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{g.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-8">
          <div className="shadow-soft rounded-2xl border border-border/70 bg-card p-6">
            <h2 className="font-display text-xl">Languages</h2>
            <ul className="mt-5 space-y-4">
              {languages.map((l) => (
                <li key={l.name}>
                  <div className="flex justify-between text-sm">
                    <span>{l.name}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-secondary">
                    <div
                      className="bg-gradient-warm h-2 rounded-full"
                      style={{ width: `${l.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="shadow-soft rounded-2xl border border-border/70 bg-card p-6">
            <h2 className="font-display text-xl">Beyond code</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Problem-solving, teamwork, clear client communication and continuous learning — the
              habits that keep long-running CRM projects healthy.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
