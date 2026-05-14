import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-broom.png";

export const Route = createFileRoute("/services/house-cleaning")({
  head: () => ({
    meta: [
      { title: "House Cleaning Perth | Regular & One-Off Cleans | BJR" },
      { name: "description", content: "Reliable weekly, fortnightly and one-off house cleaning across Perth. Police-checked cleaners, fully insured, NDIS & DVA welcome." },
      { property: "og:title", content: "House Cleaning Perth — BJR Cleaning" },
      { property: "og:description", content: "Reliable weekly, fortnightly and one-off house cleaning across Perth." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="Regular & One-Off"
      title="House Cleaning"
      icon={icon}
      intro="Keep your home spotless with a cleaning routine that fits your life. We tailor every visit to your priorities — kitchens, bathrooms, floors, dusting and beyond."
      bullets={[
        "Weekly, fortnightly or monthly visits",
        "One-off spring cleans & deep cleans",
        "Kitchens — benches, stovetops, splashbacks",
        "Bathrooms — showers, tiles, toilets, mirrors",
        "Dusting, vacuuming and mopping throughout",
        "Internal windows, tracks & sills",
        "Same cleaner each visit where possible",
        "Eco-friendly products on request",
      ]}
    />
  ),
});
