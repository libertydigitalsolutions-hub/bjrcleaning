import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-window.png";

export const Route = createFileRoute("/services/window-cleaning")({
  head: () => ({
    meta: [
      { title: "Window Cleaning Perth | Internal & External | BJR" },
      { name: "description", content: "Streak-free internal and external window cleaning across Perth. Tracks, sills and flyscreens included. Homes, offices and shopfronts." },
      { property: "og:title", content: "Window Cleaning Perth — BJR Cleaning" },
      { property: "og:description", content: "Streak-free window cleaning for homes, offices and shopfronts." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="Streak-Free"
      title="Window Cleaning"
      icon={icon}
      intro="Crystal-clear windows inside and out. We use professional squeegees and pure-water systems for a streak-free finish on every pane."
      bullets={[
        "Internal & external windows",
        "Tracks, sills & frames wiped",
        "Flyscreens vacuumed & rinsed",
        "Skylights & high windows (water-fed pole)",
        "Shopfronts & glass doors",
        "Solar panel cleaning add-on",
        "One-off or scheduled (quarterly recommended)",
        "Fully insured — no risk to your property",
      ]}
    />
  ),
});
