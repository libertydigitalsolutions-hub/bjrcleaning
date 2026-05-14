import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-mower.png";

export const Route = createFileRoute("/services/gutter-cleaning")({
  head: () => ({
    meta: [
      { title: "Gutter Cleaning Perth | Safe & Insured | BJR" },
      { name: "description", content: "Professional gutter cleaning across Perth. Prevent water damage and roof leaks. Fully insured, before & after photos provided." },
      { property: "og:title", content: "Gutter Cleaning Perth — BJR Cleaning" },
      { property: "og:description", content: "Insured gutter cleaning across Perth — before & after photos." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="Roof Protection"
      title="Gutter Cleaning"
      icon={icon}
      intro="Blocked gutters cause overflow, roof leaks and pest problems. Annual cleaning is the cheapest insurance you can buy for your home."
      bullets={[
        "All leaves, dirt & debris removed",
        "Downpipes flushed and tested",
        "Before & after photos supplied",
        "Roof valleys cleared",
        "Safe access — fully insured",
        "Recommended annually (more in leafy suburbs)",
        "Combine with solar panel clean and save",
        "Single-storey & two-storey homes",
      ]}
    />
  ),
});
