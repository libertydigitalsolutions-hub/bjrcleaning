import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-spray.png";

export const Route = createFileRoute("/services/commercial-cleaning")({
  head: () => ({
    meta: [
      { title: "Office & Commercial Cleaning Perth | BJR Cleaning" },
      { name: "description", content: "Scheduled office and commercial cleaning across Perth — daily, weekly or fortnightly. Reliable, insured, police-checked teams." },
      { property: "og:title", content: "Office & Commercial Cleaning — BJR Cleaning" },
      { property: "og:description", content: "Trusted commercial cleaning for Perth offices, retail and worksites." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="Offices, retail & worksites"
      title="Office & Commercial Cleaning"
      icon={icon}
      intro="Professional, scheduled cleaning that keeps your workplace presentable for clients and healthy for staff. Daily, weekly or fortnightly programs available."
      bullets={[
        "Workstations, desks & meeting rooms",
        "Kitchens, breakout & staff areas",
        "Restrooms — sanitised and restocked",
        "Reception & customer-facing areas",
        "Floor vacuuming, mopping & spot care",
        "Internal glass & partitions",
        "Rubbish removal & recycling",
        "Custom programs — after-hours available",
      ]}
    />
  ),
});
