import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import icon from "@/assets/icon-broom.png";

export const Route = createFileRoute("/services/airbnb-cleaning")({
  head: () => ({
    meta: [
      { title: "AirBnB & Short-Stay Turnover Cleaning Perth | BJR" },
      { name: "description", content: "Reliable AirBnB and short-stay turnovers across Perth, including linen washing, restocking and damage reporting between guests." },
      { property: "og:title", content: "AirBnB Turnover Cleaning Perth — BJR Cleaning" },
      { property: "og:description", content: "Five-star turnovers between guests — linen, restocking, reporting." },
    ],
  }),
  component: () => (
    <ServiceDetail
      tagline="Short-Stay Turnovers"
      title="AirBnB Cleaning"
      icon={icon}
      intro="Tight check-out windows, demanding guests, perfect reviews. We handle the full turnover so your property is guest-ready every time."
      bullets={[
        "Same-day turnovers between check-out & check-in",
        "Fresh linen & towel laundering included",
        "Beds made to hotel standard",
        "Kitchen, bathroom and living area detail",
        "Restocking of consumables (coffee, soap, paper)",
        "Damage & low-stock reporting via photo",
        "Lockbox / key handling",
        "5-star review focus on every clean",
      ]}
    />
  ),
});
