import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-spray.png";

export const Route = createFileRoute("/services/vacate-cleaning")({
  head: () => ({
    meta: [
      { title: "Vacate & End-of-Lease Cleaning Perth | Bond Back | BJR" },
      { name: "description", content: "End-of-lease vacate cleaning across Perth with a bond-back focus. Detailed checklist, free re-clean if your agent isn't satisfied." },
      { property: "og:title", content: "Vacate Cleaning Perth — BJR Cleaning" },
      { property: "og:description", content: "End-of-lease vacate cleaning with a bond-back focus." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="End of Lease"
      title="Vacate Cleaning"
      icon={icon}
      intro="Moving out is stressful enough. Our vacate cleans follow the standard WA real-estate checklist so you get your bond back without delays or re-cleans."
      bullets={[
        "Full kitchen detail — oven, hood, racks, cupboards inside & out",
        "Bathrooms descaled, grout cleaned, exhausts wiped",
        "Carpets steam-cleaned (receipt provided)",
        "Walls spot-cleaned, skirting boards wiped",
        "Internal & external windows, tracks & flyscreens",
        "Garage swept, balcony tidied",
        "Bond-back guarantee — free re-clean if needed",
        "Tailored to your property manager's checklist",
      ]}
    />
  ),
});
