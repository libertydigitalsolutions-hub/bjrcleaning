## BJR Cleaning – Site Rebuild Plan

A faithful rebuild of bjrcleaning.com.au as a multi-page TanStack Start site, matching the brand identity (orange top bar, blue/orange/green accents) and the same service structure. All pages get proper SEO metadata.

### Pages (separate routes)
- `/` – Home: hero, 4 service category tiles, "100% insured / police-checked" trust section, CTA.
- `/about` – About Us: company background (since 2014), values, service area (Cockburn → Mandurah), NDIS/DVA mention.
- `/services` – Services overview: full list (house, vacate, office, commercial, AirBnB, carpet/upholstery, NDIS/DVA, windows, gutters, solar, lawn/garden, rubbish removal).
- `/services/home-cleaning` – Home & Vacate Cleaning detail.
- `/services/commercial-cleaning` – Office & Commercial Cleaning detail.
- `/services/window-carpet` – Window & Carpet Cleaning detail.
- `/services/outdoor-maintenance` – Gutters, Solar Panels, Lawn Mowing detail.
- `/before-after` – Gallery section (placeholder image grid users can swap later).
- `/contact` – Contact page with phone (1800 560 706), email CTA, simple inquiry form (frontend only — no backend wiring this turn), service-area note, social links (Facebook, Instagram).

### Layout & Components
- Shared `Header` in `__root.tsx`: orange top utility bar with phone + Email Us button + social icons; white nav bar with logo placeholder + nav links (About, Services dropdown, Before & After, Contact).
- Shared `Footer`: contact info, services list, social, copyright.
- Reusable `ServiceCard`, `SectionHeading`, `CTASection` components.

### Design system (src/styles.css)
Replace default tokens with BJR palette in oklch:
- `--primary` (BJR orange ~ #F58220)
- `--secondary` (BJR blue ~ #2BA7DF)
- `--accent` (BJR green ~ #2EAE4B)
- Neutral background white, dark foreground.
- Add gradient + shadow tokens for hero/CTA polish.

### Assets
- Generate a simple BJR-style logo (text "BJR Cleaning" with subtle droplet motif) as SVG/PNG.
- Generate 4 service tile illustrations (window squeegee, broom, spray bottle, mower) as transparent PNGs in brand colors.
- Hero image: photo-style cleaning image (gloved hand cleaning window) generated via imagegen.

### SEO
Each route's `head()` sets unique `title`, `description`, `og:title`, `og:description`. Home includes business description; service pages target service-specific keywords + Perth/Mandurah area.

### Out of scope (this turn)
- Real backend / contact form submission (Lovable Cloud) — form will be UI-only with a "thanks" toast. Can be wired later on request.
- Real before/after photos — placeholder gallery only.
- Live booking / pricing engine.
