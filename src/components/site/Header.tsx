import { Link } from "@tanstack/react-router";
import { Phone, Mail, Facebook, Instagram, Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const services = [
  { to: "/services/house-cleaning", label: "House Cleaning" },
  { to: "/services/vacate-cleaning", label: "Vacate Cleaning" },
  { to: "/services/office-cleaning", label: "Office Cleaning" },
  { to: "/services/commercial-cleaning", label: "Commercial Cleaning" },
  { to: "/services/airbnb-cleaning", label: "AirBnB Cleaning" },
  { to: "/services/carpet-upholstery", label: "Carpet & Upholstery" },
  { to: "/services/ndis-dva", label: "DVA & NDIS Cleaning" },
  { to: "/services/window-cleaning", label: "Window Cleaning" },
  { to: "/services/gutter-cleaning", label: "Gutter Cleaning" },
  { to: "/services/solar-panel-cleaning", label: "Solar Panel Cleaning" },
  { to: "/services/lawn-gardening", label: "Lawn & Gardening" },
  { to: "/services/rubbish-removal", label: "Rubbish Removal" },
] as const;

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/before-after", label: "Before & After" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-brand-orange text-primary-foreground">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:1800560706" className="flex items-center gap-2 font-semibold hover:opacity-90">
              <Phone className="h-4 w-4" /> 1800 560 706
            </a>
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-white/95 px-4 py-1 font-bold text-brand-orange shadow-sm hover:bg-white sm:flex"
            >
              <Mail className="h-4 w-4" /> EMAIL US
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:opacity-80"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`border-b border-border bg-background transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className={`container mx-auto flex items-center justify-between px-4 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
          <Link to="/" aria-label="BJR Cleaning home" className="shrink-0">
            <Logo className={scrolled ? "h-12" : "h-20 md:h-24"} />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => {
              if ("hasMenu" in n && n.hasMenu) {
                return (
                  <div key={n.to} className="group relative">
                    <Link
                      to={n.to}
                      className="flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-brand-orange"
                      activeProps={{ className: "text-brand-orange" }}
                    >
                      {n.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                    </Link>
                    <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                      <div className="rounded-xl border border-border bg-background p-2 shadow-xl">
                        <Link
                          to="/services"
                          className="block rounded-md px-3 py-2 text-sm font-bold text-brand-orange hover:bg-muted"
                        >
                          All Services
                        </Link>
                        <div className="my-1 border-t border-border" />
                        {services.map((s) => (
                          <Link
                            key={s.to}
                            to={s.to}
                            className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted hover:text-brand-orange"
                            activeProps={{ className: "text-brand-orange bg-muted" }}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className="text-sm font-semibold text-foreground transition-colors hover:text-brand-orange"
                  activeProps={{ className: "text-brand-orange" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="rounded-full bg-brand-orange px-5 py-2 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:scale-105"
            >
              Get a Quote
            </Link>
          </nav>
          <button
            className="lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
              {nav.map((n) => {
                if ("hasMenu" in n && n.hasMenu) {
                  return (
                    <div key={n.to}>
                      <div className="flex items-center">
                        <Link
                          to={n.to}
                          onClick={() => setOpen(false)}
                          className="flex-1 rounded-md px-3 py-2 text-sm font-semibold hover:bg-muted"
                          activeProps={{ className: "text-brand-orange" }}
                        >
                          {n.label}
                        </Link>
                        <button
                          aria-label="Toggle services"
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className="rounded-md p-2 hover:bg-muted"
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                      {mobileServicesOpen && (
                        <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                          {services.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              onClick={() => setOpen(false)}
                              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-brand-orange"
                              activeProps={{ className: "text-brand-orange" }}
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-muted"
                    activeProps={{ className: "text-brand-orange" }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    {n.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
