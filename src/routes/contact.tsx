import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BJR Cleaning Perth — Get a Free Quote" },
      { name: "description", content: "Call 1800 560 706 or send us a message for a free, no-obligation cleaning quote anywhere from Cockburn to Mandurah." },
      { property: "og:title", content: "Contact BJR Cleaning" },
      { property: "og:description", content: "Free, fast cleaning quotes across Perth." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! We'll be in touch shortly.");
    }, 600);
  }

  return (
    <>
      <section className="bg-[image:var(--gradient-hero)] py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">Get in touch</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Tell us about your job and we'll send a free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-bold text-brand-navy">Contact details</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-orange" /> <a href="tel:1800560706" className="font-semibold">1800 560 706</a></li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-orange" /> <a href="mailto:info@bjrcleaning.com.au" className="font-semibold">info@bjrcleaning.com.au</a></li>
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand-orange" /> Cockburn to Mandurah, WA</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-muted p-6">
              <h3 className="font-bold text-brand-navy">Service area</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We service the entire Cockburn to Mandurah corridor and surrounding suburbs. Not sure
                if you're in our area? Just ask.
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <div>
              <label className="mb-1 block text-sm font-semibold">Service needed</label>
              <select name="service" className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm">
                <option>Home / Vacate cleaning</option>
                <option>Office / Commercial cleaning</option>
                <option>Window & Carpet</option>
                <option>Gutters, Solar & Lawn</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                placeholder="Tell us about your property, job size, preferred dates…"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-bold text-primary-foreground shadow hover:opacity-90 disabled:opacity-60"
            >
              <Send className="h-4 w-4" /> {sending ? "Sending…" : "Send enquiry"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
      />
    </div>
  );
}
