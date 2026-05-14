import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-[image:var(--gradient-cta)] py-14 text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center gap-5 px-4 text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">Ready for a sparkling clean?</h2>
        <p className="max-w-2xl text-white/90">
          Get a free, no-obligation quote. Friendly, reliable, fully insured cleaners across Perth.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:1800560706"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-brand-orange shadow-md transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" /> 1800 560 706
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold text-white hover:bg-white hover:text-brand-orange"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
