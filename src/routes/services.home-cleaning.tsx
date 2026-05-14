import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-broom.png";

export const Route = createFileRoute("/services/home-cleaning")({
  head: () => ({
    meta: [
      { title: "Home & Vacate Cleaning Perth | BJR Cleaning" },
      { name: "description", content: "Regular house cleans, one-off deep cleans and end-of-lease vacate cleans across Perth. Indoors & outdoors. Bond-back focused." },
      { property: "og:title", content: "Home & Vacate Cleaning — BJR Cleaning" },
      { property: "og:description", content: "Reliable house and vacate cleaning across Perth — Cockburn to Mandurah." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="Indoors & Outdoors"
      title="Home & Vacate Cleaning"
      icon={icon}
      intro="From regular fortnightly maintenance through to bond-back vacate cleans, our experienced team will leave your home spotless inside and out."
      bullets={[
        "Kitchens — benchtops, splashbacks, stovetops, ovens",
        "Bathrooms — showers, tiles, toilets, mirrors",
        "Bedrooms & living areas — dusting, vacuuming, mopping",
        "Internal windows, tracks & sills",
        "End-of-lease vacate cleans (bond-back focused)",
        "Outdoor sweeping, cobweb removal & balcony tidy",
        "AirBnB turnover with linen & towel washing",
        "NDIS & DVA approved — flexible scheduling",
      ]}
    />
  ),
});
