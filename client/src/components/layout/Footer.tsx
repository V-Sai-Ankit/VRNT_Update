import { Link } from "react-router-dom";
import { PRIMARY_NAV, DONATE_LINK, LOGIN_URL } from "@/lib/navigation";
import { SITE_CONTENT } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-wide grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-xl font-bold text-accent">Veda Rakshana Nidhi Trust</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-secondary-foreground/80">
            {SITE_CONTENT.header.patronage}
          </p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-secondary-foreground/80">
            {SITE_CONTENT.header.address}
          </address>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
          {PRIMARY_NAV.flatMap((g) => g.links).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="min-h-9 py-1 text-secondary-foreground/80 hover:text-accent hover:underline"
            >
              {link.label}
            </Link>
          ))}
          <Link to={DONATE_LINK.path} className="min-h-9 py-1 text-secondary-foreground/80 hover:text-accent hover:underline">
            {DONATE_LINK.label}
          </Link>
        </nav>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Login to member portal ↗
          </a>
          <p className="text-xs text-secondary-foreground/60">
            {SITE_CONTENT.header.subtitle}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-secondary-foreground/60 sm:px-6">
        © {year} Veda Rakshana Nidhi Trust. All rights reserved.
      </div>
    </footer>
  );
}
