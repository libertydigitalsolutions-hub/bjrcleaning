import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, BadgeCheck, Sparkles, ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-cleaning.jpg";
import iconWindow from "@/assets/icon-window.png";
import iconBroom from "@/assets/icon-broom.png";
import iconSpray from "@/assets/icon-spray.png";
import iconMower from "@/assets/icon-mower.png";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BJR Cleaning — Trusted Home & Commercial Cleaners in Perth" },
      { name: "description", content: "From Cockburn to Mandurah: house, vacate, office, window, carpet, gutter & lawn services. 100% insured, police-checked. NDIS & DVA welcome." },
      { property: "og:title", content: "BJR Cleaning — Trusted Perth Cleaners" },
      { property: "og:description", content: "High-standard, value-for-money cleaning packages across Perth." },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const services = [
  { to: "/services/home-cleaning", icon: iconBroom, label: "Home & Vacate Cleaning", sub: "Indoors & outdoors" },
  { to: "/services/commercial-cleaning", icon: iconSpray, label: "Office & Commercial", sub: "Reliable, scheduled cleans" },
  { to: "/services/window-carpet", icon: iconWindow, label: "Window & Carpet", sub: "Streak-free results" },
  { to: "/services/outdoor-maintenance", icon: iconMower, label: "Gutters, Solar & Lawn", sub: "Outdoor maintenance" },
] as const;

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] text-white">
        <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Trusted since 2014
            </div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              High-standard cleaning packages, real value for money.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/90">
              BJR Cleaning services Cockburn to Mandurah and surrounding areas — proudly working with
              NDIS and DVA clients.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-bold shadow-lg transition-transform hover:scale-105"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:1800560706"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-6 py-3 font-bold hover:bg-white hover:text-brand-blue"
              >
                <Phone className="h-4 w-4" /> 1800 560 706
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> 100% Insured</div>
              <div className="flex items-center gap-2"><BadgeCheck className="h-5 w-5" /> Police-Checked</div>
              <div className="flex items-center gap-2"><Sparkles className="h-5 w-5" /> NDIS & DVA</div>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/20">
              <img
                src={heroImg}
                alt="Professional cleaner washing a window with squeegee and microfiber cloth"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service tiles */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-brand-navy md:text-4xl">Our Cleaning Services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              A wide range of professional services for homes, businesses and outdoor spaces.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex flex-col items-center rounded-2xl bg-card p-6 text-center shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
              >
                <img src={s.icon} alt="" width={120} height={120} className="h-28 w-28 transition-transform group-hover:scale-110" />
                <h3 className="mt-4 text-lg font-bold text-brand-navy">{s.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.sub}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-background py-16">
        <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-brand-navy md:text-4xl">
              100% insured. Police-checked. Genuinely experienced.
            </h2>
            <p className="mt-4 text-muted-foreground">
              BJR Cleaning Home & Commercial Services has been part of the Perth property industry
              since 2014. That experience gives us the tools to complete every job — from a one-off
              gutter clean to a regular fortnightly house service — to a high standard.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Fully insured for your peace of mind",
                "All cleaners are police-checked",
                "NDIS & DVA approved provider",
                "Servicing Cockburn through to Mandurah",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-brand-green" /> {t}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 font-bold text-primary-foreground hover:opacity-90"
            >
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[iconBroom, iconWindow, iconSpray, iconMower].map((src, i) => (
              <div key={i} className="flex items-center justify-center rounded-2xl bg-muted p-6">
                <img src={src} alt="" width={140} height={140} className="h-28 w-28" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
