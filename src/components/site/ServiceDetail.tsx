import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { CTASection } from "./CTASection";

export function ServiceDetail({
  title,
  tagline,
  intro,
  icon,
  bullets,
}: {
  title: string;
  tagline: string;
  intro: string;
  icon: string;
  bullets: string[];
}) {
  return (
    <>
      <section className="bg-[image:var(--gradient-hero)] py-16 text-white">
        <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">{tagline}</p>
            <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">{title}</h1>
          </div>
          <img src={icon} alt="" width={160} height={160} className="h-32 w-32 md:h-40 md:w-40" />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-5">
            <p className="text-lg text-muted-foreground">{intro}</p>
            <h2 className="text-2xl font-bold text-brand-navy">What's included</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-2xl bg-muted p-6">
            <h3 className="text-lg font-bold text-brand-navy">Get a free quote</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your property and we'll send a tailored, no-obligation quote.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 font-bold text-primary-foreground hover:opacity-90"
            >
              Request quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:1800560706"
              className="mt-3 block rounded-full border-2 border-brand-blue px-5 py-2 text-center font-bold text-brand-blue hover:bg-brand-blue hover:text-primary-foreground"
            >
              Call 1800 560 706
            </a>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
