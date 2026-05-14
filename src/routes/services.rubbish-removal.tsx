import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-mower.png";

export const Route = createFileRoute("/services/rubbish-removal")({
  head: () => ({
    meta: [
      { title: "Rubbish & Junk Removal Perth | Same-Day Pickup | BJR" },
      { name: "description", content: "Fast rubbish and junk removal across Perth. Furniture, garage clear-outs, deceased estates and post-renovation waste. Responsibly disposed." },
      { property: "og:title", content: "Rubbish & Junk Removal Perth — BJR Cleaning" },
      { property: "og:description", content: "Fast junk and rubbish removal across Perth, responsibly disposed." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="Load & Go"
      title="Rubbish & Junk Removal"
      icon={icon}
      intro="From a single old fridge to a full house clear-out, we load, haul and dispose responsibly — diverting to recycling and charity wherever possible."
      bullets={[
        "Furniture & whitegoods removal",
        "Garage & shed clear-outs",
        "Deceased estate clearances",
        "Post-renovation waste",
        "Green waste & garden cuttings",
        "Same-day or scheduled pickup",
        "Responsible recycling & donation",
        "Transparent per-load pricing",
      ]}
    />
  ),
});
