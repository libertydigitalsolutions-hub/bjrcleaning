import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-brand-navy text-primary-foreground">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="rounded-xl bg-white/95 px-6 py-5 inline-block shadow-sm">
            <Logo className="h-16" />
          </div>
          <p className="mt-4 text-sm text-white/80">
            Trusted home & commercial cleaning across Perth — from Cockburn to Mandurah. 100% insured,
            police-checked cleaners. Working with NDIS & DVA clients since 2014.
          </p>
          <a
            href="https://upkeepers.com.au/businesses/bjr-cleaning"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white/90 transition-colors hover:border-brand-orange hover:bg-white/10 hover:text-brand-orange"
          >
            <span className="h-2 w-2 rounded-full bg-brand-orange" />
            Part of the Upkeepers Network
          </a>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-orange">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/home-cleaning" className="hover:text-brand-orange">Home & Vacate Cleaning</Link></li>
            <li><Link to="/services/commercial-cleaning" className="hover:text-brand-orange">Office & Commercial</Link></li>
            <li><Link to="/services/window-carpet" className="hover:text-brand-orange">Window & Carpet</Link></li>
            <li><Link to="/services/outdoor-maintenance" className="hover:text-brand-orange">Gutters, Solar & Lawn</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-orange">Get in touch</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:1800560706">1800 560 706</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:info@bjrcleaning.com.au">info@bjrcleaning.com.au</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Cockburn to Mandurah, WA</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} BJR Cleaning Home & Commercial Services. All rights reserved.
      </div>
    </footer>
  );
}
