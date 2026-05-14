import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-mower.png";

export const Route = createFileRoute("/services/outdoor-maintenance")({
  head: () => ({
    meta: [
      { title: "Gutter, Solar Panel & Lawn Mowing Perth | BJR Cleaning" },
      { name: "description", content: "Gutter cleaning, solar panel cleaning, lawn mowing, gardening and rubbish removal across Perth — Cockburn to Mandurah." },
      { property: "og:title", content: "Outdoor Maintenance — BJR Cleaning" },
      { property: "og:description", content: "Gutters, solar panels, lawns and rubbish removal — handled by one trusted team." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="Outdoor maintenance"
      title="Gutters, Solar Panels & Lawn Mowing"
      icon={icon}
      intro="One team for every outdoor task — keep your gutters flowing, your solar panels efficient and your gardens looking sharp."
      bullets={[
        "Gutter cleaning & downpipe flushing",
        "Solar panel washing for max output",
        "Lawn mowing, edging & whipper-snipping",
        "Hedge trimming & pruning",
        "Garden tidy & weeding",
        "Pressure washing — driveways, paths, decks",
        "Rubbish & junk removal",
        "Strata & property manager friendly",
      ]}
    />
  ),
});
