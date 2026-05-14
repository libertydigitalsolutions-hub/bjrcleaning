import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-broom.png";

export const Route = createFileRoute("/services/ndis-dva")({
  head: () => ({
    meta: [
      { title: "NDIS & DVA Cleaning Services Perth | BJR Cleaning" },
      { name: "description", content: "Friendly, reliable NDIS and DVA home cleaning across Perth. Plan-managed invoicing, police-checked staff, consistent cleaner each visit." },
      { property: "og:title", content: "NDIS & DVA Cleaning Perth — BJR Cleaning" },
      { property: "og:description", content: "Plan-managed NDIS & DVA home cleaning across Perth." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="Plan-Managed"
      title="NDIS & DVA Cleaning"
      icon={icon}
      intro="We've supported NDIS and DVA clients across Perth since 2014. Friendly, consistent cleaners who follow your routine and respect your home."
      bullets={[
        "Domestic assistance & home cleaning",
        "Plan-managed and self-managed invoicing",
        "Police-checked, insured cleaners",
        "Same cleaner each visit where possible",
        "Flexible scheduling around appointments",
        "Cleaning to a checklist you approve",
        "Linen change & laundry assistance",
        "Discreet, respectful service",
      ]}
    />
  ),
});
