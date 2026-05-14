import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-window.png";

export const Route = createFileRoute("/services/window-carpet")({
  head: () => ({
    meta: [
      { title: "Window & Carpet Cleaning Perth | BJR Cleaning" },
      { name: "description", content: "Streak-free internal & external window cleaning, plus deep carpet and upholstery cleaning across Perth." },
      { property: "og:title", content: "Window & Carpet Cleaning — BJR Cleaning" },
      { property: "og:description", content: "Crystal-clear windows and refreshed carpets across Perth homes and businesses." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="Streak-free results"
      title="Window & Carpet Cleaning"
      icon={icon}
      intro="Restore the sparkle to your windows and lift your carpets back to life. Safe equipment, professional products and properly trained operators."
      bullets={[
        "Internal & external window cleaning",
        "Frames, tracks, sills & flyscreens",
        "Hot-water carpet extraction",
        "Stain & high-traffic spot treatment",
        "Lounge, sofa & upholstery cleaning",
        "Mattress freshening",
        "Pet-friendly products available",
        "Pre-vacate carpet packages",
      ]}
    />
  ),
});
