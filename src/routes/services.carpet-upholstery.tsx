import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-spray.png";

export const Route = createFileRoute("/services/carpet-upholstery")({
  head: () => ({
    meta: [
      { title: "Carpet & Upholstery Cleaning Perth | Steam Extraction | BJR" },
      { name: "description", content: "Professional hot-water extraction carpet and upholstery cleaning across Perth. Pet stains, odours and high-traffic wear." },
      { property: "og:title", content: "Carpet & Upholstery Cleaning — BJR Cleaning" },
      { property: "og:description", content: "Hot-water extraction carpet & upholstery cleaning across Perth." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="Deep Extraction"
      title="Carpet & Upholstery Cleaning"
      icon={icon}
      intro="Hot-water extraction lifts dirt, allergens and odour from deep in the fibres — adding years to the life of your carpets and lounges."
      bullets={[
        "Truck-mounted hot-water extraction",
        "Pre-treatment for high-traffic areas",
        "Pet stain & odour removal (enzyme-based)",
        "Rugs, lounges, dining chairs & mattresses",
        "Stain protection treatment available",
        "Fast drying — usually walkable in a few hours",
        "Vacate-clean receipts provided",
        "Safe for kids and pets",
      ]}
    />
  ),
});
