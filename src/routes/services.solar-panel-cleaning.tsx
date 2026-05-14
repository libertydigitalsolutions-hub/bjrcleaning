import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-window.png";

export const Route = createFileRoute("/services/solar-panel-cleaning")({
  head: () => ({
    meta: [
      { title: "Solar Panel Cleaning Perth | Restore Output | BJR" },
      { name: "description", content: "Professional solar panel cleaning across Perth. Restore lost output, protect your warranty, deionised water and soft brushes." },
      { property: "og:title", content: "Solar Panel Cleaning Perth — BJR Cleaning" },
      { property: "og:description", content: "Restore solar output with a professional, warranty-safe panel clean." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="Restore Output"
      title="Solar Panel Cleaning"
      icon={icon}
      intro="Coastal dust, salt and bird droppings can drop solar output by up to 25%. A safe, professional clean pays for itself in months of restored generation."
      bullets={[
        "Deionised pure-water clean (no spotting)",
        "Soft brushes — warranty-safe",
        "We never walk on the panels",
        "Annual clean recommended (6-monthly near coast)",
        "Bird-proofing add-on available",
        "Combine with gutter clean to save",
        "Residential & commercial arrays",
        "Fully insured access",
      ]}
    />
  ),
});
