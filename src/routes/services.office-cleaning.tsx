import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-spray.png";

export const Route = createFileRoute("/services/office-cleaning")({
  head: () => ({
    meta: [
      { title: "Office Cleaning Perth | Daily & Weekly Contracts | BJR" },
      { name: "description", content: "Reliable office cleaning across Perth — daily, weekly or after-hours. Police-checked cleaners, full insurance, tailored to your floorplan." },
      { property: "og:title", content: "Office Cleaning Perth — BJR Cleaning" },
      { property: "og:description", content: "Daily, weekly and after-hours office cleaning across Perth." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="For Workplaces"
      title="Office Cleaning"
      icon={icon}
      intro="A clean office reduces sick days and impresses clients. We build a schedule around your business hours — before staff arrive, after they leave, or in between."
      bullets={[
        "Daily touchpoint sanitising — handles, switches, keyboards",
        "Bathrooms cleaned & restocked",
        "Kitchens, breakrooms and bins managed",
        "Vacuuming, mopping and floor care",
        "Glass partitions & internal windows",
        "Boardroom & reception detailing",
        "After-hours & weekend availability",
        "Single point of contact, consistent team",
      ]}
    />
  ),
});
