import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/before-after")({
  head: () => ({
    meta: [
      { title: "Before & After — BJR Cleaning Perth" },
      { name: "description", content: "See the difference BJR Cleaning makes — real before and after results from kitchens, bathrooms, ovens, gutters and more." },
      { property: "og:title", content: "Before & After — BJR Cleaning" },
      { property: "og:description", content: "Real cleaning results from Perth homes and businesses." },
    ],
  }),
  component: BeforeAfter,
});

const items = [
  { label: "Oven deep clean", color: "from-brand-orange to-brand-blue" },
  { label: "Bathroom restoration", color: "from-brand-blue to-brand-green" },
  { label: "Carpet extraction", color: "from-brand-green to-brand-orange" },
  { label: "Gutter clear-out", color: "from-brand-navy to-brand-blue" },
  { label: "Solar panel wash", color: "from-brand-blue to-brand-orange" },
  { label: "Vacate clean", color: "from-brand-orange to-brand-green" },
];

function BeforeAfter() {
  return (
    <>
      <section className="bg-[image:var(--gradient-hero)] py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">Before &amp; After</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Real results from real jobs across Perth — a small selection of the work we deliver every week.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it) => (
              <div key={it.label} className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                <div className="grid grid-cols-2">
                  <div className="aspect-square bg-muted">
                    <div className="flex h-full items-center justify-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Before
                    </div>
                  </div>
                  <div className={`aspect-square bg-gradient-to-br ${it.color}`}>
                    <div className="flex h-full items-center justify-center text-xs font-bold uppercase tracking-wider text-white">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-brand-navy">{it.label}</h3>
                  <p className="text-xs text-muted-foreground">Sample placeholder — swap with your real photo.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
