import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  profile,
  projects,
  skillGroups,
  experience,
  services,
  process as howIWork,
  marqueeTech,
} from "@/lib/portfolio-data";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dhanvi Bhadiyadra — Laravel & Vue.js Developer Portfolio" },
      {
        name: "description",
        content:
          "Full-stack developer in Surat specialising in Laravel, Vue.js, API integrations and AI-powered CRM automation. Working professionally since Feb 2023.",
      },
      { property: "og:title", content: "Dhanvi Bhadiyadra — Laravel & Vue.js Developer" },
      {
        property: "og:description",
        content: "CRMs, payment integrations and AI automations built with Laravel and Vue.js.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="bg-gradient-subtle relative overflow-hidden border-b border-border/70">
        <div
          aria-hidden
          className="bg-gradient-warm animate-float-slow pointer-events-none absolute -top-28 -right-24 size-96 rounded-full opacity-40 blur-3xl"
        />
        <div
          aria-hidden
          className="bg-gradient-warm animate-float-slow pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full opacity-25 blur-3xl"
          style={{ animationDelay: "2.5s" }}
        />
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.35fr_1fr] md:py-28">
          <div>
            <p className="animate-rise-in text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              {profile.role}
            </p>
            <h1
              className="font-display animate-rise-in mt-4 text-5xl leading-[1.05] tracking-tight sm:text-6xl"
              style={{ animationDelay: "90ms" }}
            >
              {profile.name}
            </h1>
            <p
              className="animate-rise-in mt-5 max-w-xl text-lg text-muted-foreground"
              style={{ animationDelay: "180ms" }}
            >
              {profile.tagline}
            </p>

            <div
              className="animate-rise-in mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "260ms" }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                View my work
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in touch
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border/70 pt-6">
              {[
                { k: "3+ yrs", v: `Since ${profile.since}` },
                { k: "20+", v: "Projects shipped" },
                { k: "Real-time", v: "Sockets & tracking" },
              ].map((s, idx) => (
                <Reveal key={s.k} delay={idx * 90}>
                  <dt className="font-display text-2xl">{s.k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <aside className="bg-gradient-warm shadow-lift grain relative overflow-hidden rounded-3xl p-8">
            <div className="glass-strong relative z-10 rounded-2xl p-6">

              <p className="font-display text-xl">Currently</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Freelance full-stack developer & Master's student in Generative AI at SRM
                University.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 text-primary" /> {profile.location}
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-primary" />
                  <a href={profile.phoneHref} className="hover:underline">
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-primary" />
                  <a href={`mailto:${profile.email}`} className="break-all hover:underline">
                    {profile.email}
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl tracking-tight">What I work with</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="shadow-soft rounded-2xl border border-border/70 bg-card p-6">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-primary">
                {g.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl tracking-tight">Selected projects</h2>
            <Link to="/projects" className="text-sm text-primary hover:underline">
              All projects →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <article
                key={p.name}
                className="shadow-soft rounded-2xl border border-border/70 bg-card p-6"
              >
                <p className="text-xs tracking-wide text-muted-foreground uppercase">{p.kind}</p>
                <h3 className="font-display mt-2 text-xl">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl tracking-tight">Where I've worked</h2>
          <Link to="/experience" className="text-sm text-primary hover:underline">
            Full experience →
          </Link>
        </div>
        <ul className="mt-8 divide-y divide-border/70">
          {experience.map((e) => (
            <li key={e.company} className="flex flex-wrap justify-between gap-2 py-5">
              <div>
                <p className="font-medium">{e.company}</p>
                <p className="text-sm text-muted-foreground">{e.role}</p>
              </div>
              <p className="text-sm text-muted-foreground">{e.period}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
