import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/portfolio-data";
import type { ServicePage } from "@/lib/service-pages";

export function ServicePageView({ page }: { page: ServicePage }) {
  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.h1} intro={page.intro} />

      <div className="mx-auto w-full max-w-6xl px-6 pb-8">
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          >
            Start a project
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <Link
            to="/projects"
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            See past work
          </Link>
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="font-display text-3xl tracking-tight">What I deliver</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {page.offers.map((o, idx) => (
            <Reveal key={o.title} delay={idx * 80}>
              <div className="shadow-soft hover:shadow-lift h-full rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-display text-lg">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <h2 className="font-display text-2xl tracking-tight">Tools I use</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {page.stack.map((s) => (
              <li
                key={s}
                className="flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs text-foreground"
              >
                <Check className="size-3.5 text-primary" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <h2 className="font-display text-3xl tracking-tight">Questions</h2>
        <dl className="mt-8 space-y-6">
          {page.faqs.map((f) => (
            <div key={f.q} className="glass rounded-2xl p-6">
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-sm text-muted-foreground">
          Based in {profile.location} and working remotely.{" "}
          <Link to="/contact" className="text-primary hover:underline">
            Get in touch
          </Link>{" "}
          or read more{" "}
          <Link to="/about" className="text-primary hover:underline">
            about my background
          </Link>
          .
        </p>
      </section>
    </>
  );
}
