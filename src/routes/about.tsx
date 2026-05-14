import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, BadgeCheck, MapPin, Calendar } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BJR Cleaning — Trusted Perth Cleaners Since 2014" },
      { name: "description", content: "Family-run, 100% insured, police-checked cleaners with deep property-industry experience. Servicing Cockburn to Mandurah, NDIS & DVA approved." },
      { property: "og:title", content: "About BJR Cleaning" },
      { property: "og:description", content: "Trusted Perth cleaning team servicing Cockburn to Mandurah since 2014." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-[image:var(--gradient-hero)] py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">About BJR Cleaning</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            A trusted Perth cleaning team delivering high-standard work across homes, offices and outdoor spaces.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-5 text-muted-foreground">
            <p>
              BJR Cleaning Home & Commercial Services has been part of the Perth property industry
              since 2014. Over the years we’ve built a reputation for thoroughness, honesty and
              reliability — whether that's a regular house clean, a one-off vacate, or an outdoor
              gutter and solar panel job.
            </p>
            <p>
              Our team is fully insured and every cleaner is police-checked. We work closely with
              NDIS participants and DVA clients to provide consistent, respectful service in your home.
            </p>
            <p>
              We service Cockburn through to Mandurah and the surrounding suburbs — get in touch for a
              fast, no-obligation quote.
            </p>
          </div>
          <aside className="space-y-4">
            {[
              { icon: ShieldCheck, label: "100% insured" },
              { icon: BadgeCheck, label: "Police-checked staff" },
              { icon: Calendar, label: "Operating since 2014" },
              { icon: MapPin, label: "Cockburn to Mandurah" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                <Icon className="h-5 w-5 text-brand-orange" />
                <span className="font-semibold">{label}</span>
              </div>
            ))}
            <Link
              to="/contact"
              className="block rounded-xl bg-brand-orange p-4 text-center font-bold text-primary-foreground shadow hover:opacity-90"
            >
              Request a Quote
            </Link>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
