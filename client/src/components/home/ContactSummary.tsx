import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE_CONTENT } from "@/lib/constants";

export default function ContactSummary() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-wide px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl font-bold text-primary sm:text-3xl">Visit or Write to Us</h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface p-5 text-center shadow-soft">
            <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-foreground/90">{SITE_CONTENT.header.address}</p>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface p-5 text-center shadow-soft">
            <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
            <a href="tel:04424740549" className="text-sm font-semibold text-foreground hover:underline">
              044-24740549
            </a>
            <a href="tel:9360731283" className="text-sm text-muted-foreground hover:underline">
              93607 31283
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface p-5 text-center shadow-soft">
            <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
            <a href="mailto:office@vrnt.org" className="text-sm font-semibold text-foreground hover:underline">
              office@vrnt.org
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/contact" className="font-sans text-sm font-bold text-primary hover:underline">
            Full contact details &amp; map →
          </Link>
        </div>
      </div>
    </section>
  );
}
