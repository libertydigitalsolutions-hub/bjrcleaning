import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/site/CTASection";
import iconWindow from "@/assets/icon-window.png";
import iconBroom from "@/assets/icon-broom.png";
import iconSpray from "@/assets/icon-spray.png";
import iconMower from "@/assets/icon-mower.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Cleaning Services Perth — Home, Commercial, Windows, Gutters | BJR" },
      { name: "description", content: "Full list of BJR Cleaning services: house, vacate, office, commercial, AirBnB, carpet, NDIS/DVA, windows, gutters, solar panels, lawn mowing, rubbish removal." },
      { property: "og:title", content: "Cleaning Services — BJR Cleaning Perth" },
      { property: "og:description", content: "Every cleaning service we offer across Perth, from one-off vacates to scheduled commercial cleans." },
    ],
  }),
  component: Services,
});

const all = [
  { to: "/services/house-cleaning", label: "House Cleaning" },
  { to: "/services/vacate-cleaning", label: "Vacate Cleaning" },
  { to: "/services/office-cleaning", label: "Office Cleaning" },
  { to: "/services/commercial-cleaning", label: "Commercial Cleaning" },
  { to: "/services/airbnb-cleaning", label: "AirBnB Cleaning (incl. Washing)" },
  { to: "/services/carpet-upholstery", label: "Carpet & Upholstery Cleaning" },
  { to: "/services/ndis-dva", label: "DVA & NDIS Cleaning" },
  { to: "/services/window-cleaning", label: "Window Cleaning" },
  { to: "/services/gutter-cleaning", label: "Gutter Cleaning" },
  { to: "/services/solar-panel-cleaning", label: "Solar Panel Cleaning" },
  { to: "/services/lawn-gardening", label: "Lawn Mowing & Gardening" },
  { to: "/services/rubbish-removal", label: "Rubbish & Junk Removal" },
] as const;

const groups = [
  { to: "/services/home-cleaning", icon: iconBroom, title: "Home & Vacate Cleaning", desc: "Regular, one-off and end-of-lease cleans inside and out." },
  { to: "/services/commercial-cleaning", icon: iconSpray, title: "Office & Commercial", desc: "Scheduled cleans for offices, retail and commercial sites." },
  { to: "/services/window-carpet", icon: iconWindow, title: "Window & Carpet", desc: "Streak-free windows and deep-cleaned carpets & upholstery." },
  { to: "/services/outdoor-maintenance", icon: iconMower, title: "Gutters, Solar & Lawn", desc: "Gutters, solar panels, lawn mowing, gardening, junk removal." },
];

function Services() {
  return (
    <>
      <section className="bg-[image:var(--gradient-hero)] py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">Our Services</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            BJR Cleaning offers a wide range of high-standard services for homes, businesses and outdoor spaces.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {groups.map((g) => (
              <Link
                key={g.to}
                to={g.to}
                className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
              >
                <img src={g.icon} alt="" width={96} height={96} className="h-20 w-20 shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-brand-navy">{g.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange">
                    View details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-muted p-8">
            <h2 className="text-2xl font-extrabold text-brand-navy">Everything we cover</h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {all.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="group flex items-center justify-between gap-2 rounded-lg bg-card px-4 py-3 text-sm font-semibold shadow-sm transition-colors hover:bg-brand-orange hover:text-primary-foreground"
                  >
                    <span>{s.label}</span>
                    <ArrowRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
