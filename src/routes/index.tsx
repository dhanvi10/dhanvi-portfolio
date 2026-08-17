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
      { title: "Laravel & PHP Developer in Surat | Dhanvi Bhadiyadra" },
      {
        name: "description",
        content:
          "Freelance Laravel, PHP and full-stack developer in Surat, India. 3+ years building CRMs, REST APIs, payment integrations and AI automation with Laravel and Vue.js.",
      },
      { property: "og:title", content: "Laravel & PHP Developer in Surat | Dhanvi Bhadiyadra" },
      {
        property: "og:description",
        content:
          "Freelance Laravel, PHP and Vue.js developer building CRMs, payment integrations and AI automations.",
      },
      { property: "og:url", content: "https://dhanvi-portfolio.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://dhanvi-portfolio.lovable.app/" }],
  }),
  component: Home,
});

function Home() {
  const rubbl = projects[0]!;
  const yolo = projects[1]!;

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

      <div className="relative overflow-hidden border-b border-border/70 py-4">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
          {[...marqueeTech, ...marqueeTech].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="text-sm tracking-[0.18em] text-muted-foreground uppercase"
            >
              {t} <span className="text-primary">•</span>
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight">What I work with</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, idx) => (
            <Reveal key={g.title} delay={idx * 70}>
              <div className="shadow-soft hover:shadow-lift h-full rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1">
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
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/70 bg-secondary/40">
        <div
          aria-hidden
          className="bg-gradient-warm animate-float-slow pointer-events-none absolute top-10 right-0 size-72 rounded-full opacity-25 blur-3xl"
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Spotlight
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight">RUBBL — Australia</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <div className="glass-strong shadow-lift h-full rounded-3xl p-8">
                <p className="text-muted-foreground">{rubbl.description}</p>
                <ul className="mt-6 space-y-3">
                  {rubbl.highlights?.map((h) => (
                    <li key={h} className="flex gap-3 text-sm">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {rubbl.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="glass shadow-soft h-full rounded-3xl p-8">
                <h3 className="font-display text-xl">{yolo.name}</h3>
                <p className="mt-1 text-xs tracking-[0.18em] text-primary uppercase">
                  {yolo.kind}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">{yolo.description}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {yolo.highlights?.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight">How I can help</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 80}>
              <div className="glass h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="font-display text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight">How I work</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {howIWork.map((p, idx) => (
              <Reveal key={p.step} delay={idx * 80}>
                <div className="shadow-soft h-full rounded-2xl border border-border/70 bg-card p-6">
                  <p className="font-display text-3xl text-primary">{p.step}</p>
                  <h3 className="mt-3 font-medium">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl tracking-tight">Selected projects</h2>
          <Link to="/projects" className="text-sm text-primary hover:underline">
            All projects →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.slice(2, 5).map((p, idx) => (
            <Reveal key={p.name} delay={idx * 80}>
              <article className="shadow-soft hover:shadow-lift h-full rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1">
                <p className="text-xs tracking-wide text-muted-foreground uppercase">{p.kind}</p>
                <h3 className="font-display mt-2 text-xl">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
              </article>
            </Reveal>
          ))}
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
