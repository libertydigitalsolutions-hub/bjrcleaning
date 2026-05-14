import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-mower.png";

export const Route = createFileRoute("/services/lawn-gardening")({
  head: () => ({
    meta: [
      { title: "Lawn Mowing & Garden Maintenance Perth | BJR" },
      { name: "description", content: "Lawn mowing, edging, hedging and garden tidies across Perth. One-off or scheduled — keep your yard looking sharp year-round." },
      { property: "og:title", content: "Lawn Mowing & Garden Maintenance — BJR Cleaning" },
      { property: "og:description", content: "Lawn mowing, edging and garden tidy across Perth." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="Outdoor Tidy"
      title="Lawn Mowing & Garden Maintenance"
      icon={icon}
      intro="A sharp lawn lifts the whole street appeal of your home. We mow, edge, prune and clean up — leaving your yard looking like a feature."
      bullets={[
        "Lawn mowing & catching",
        "Edging along paths and beds",
        "Hedging & shrub pruning",
        "Whipper-snipping",
        "Garden bed weeding & tidying",
        "Green waste removal",
        "Scheduled fortnightly or monthly",
        "Pre-sale & rental property tidies",
      ]}
    />
  ),
});
