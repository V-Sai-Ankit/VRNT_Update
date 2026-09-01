import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ANNOUNCEMENTS, getFeaturedAnnouncement } from "@/lib/announcements";

/**
 * Homepage hero excerpt (~50 words). Deliberately shorter than
 * SITE_CONTENT.mission.detailed, which is the full, unabridged wording and
 * still appears verbatim as the opening paragraph of the /mission page.
 * This excerpt covers exactly the same four facts the full text does --
 * public charitable trust, founded 1963, guidance of the Kanchi Kamakoti
 * Peetam, mission of preserving traditional Vedic education -- without
 * inventing any new claim. See PRODUCTION_READINESS.md for the change note.
 */
const HERO_EXCERPT =
  "Veda Rakshana Nidhi Trust is a public charitable trust founded in 1963 under the guidance of the Kanchi Kamakoti Peetam. For over six decades, the Trust has worked to preserve traditional Vedic education — supporting Vedic scholars, students, and Patasalas across India so this ancient oral tradition endures for future generations.";

export default function HeroSection() {
  const featured = ANNOUNCEMENTS.length > 0 ? getFeaturedAnnouncement() : null;

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-wide items-start gap-6 px-4 py-8 sm:px-6 sm:py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10 md:py-16">
        {/* Content comes first in document order so mobile visitors reach the
            heading, mission excerpt, and calls to action immediately -- the
            announcement and portrait no longer need to render before them. */}
        <div className="min-w-0">
          <p className="mb-3 font-sans text-xs font-bold uppercase tracking-wider text-accent-strong">
            Established 1963 · Public Charitable Trust
          </p>
          <h1 className="font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
            Preserving the Eternal Veda Dharma
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/90 sm:mt-5 sm:text-lg">
            {HERO_EXCERPT}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <Button asChild size="lg">
              <Link to="/donate">Support the Trust</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/mission">Learn about our mission</Link>
            </Button>
          </div>
        </div>

        {/* Announcement (above the fold, no scrolling required) stacked over
            a smaller, still-dignified portrait. On mobile the announcement
            collapses to a single-line banner to keep the whole hero -- CTAs
            included -- within the first screen. */}
        <div className="min-w-0 flex flex-col gap-4 md:gap-5">
          {featured && (
            <div className="rounded-lg border border-accent/40 bg-background shadow-soft">
              {/* Compact one-line banner (below md) */}
              <Link
                to={`/announcements/${featured.id}`}
                className="flex min-h-11 items-center gap-2.5 px-4 py-2.5 md:hidden"
              >
                <Bell className="h-4 w-4 shrink-0 text-accent-strong" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate font-sans text-sm font-semibold text-foreground">
                  {featured.title}
                </span>
                <span className="shrink-0 font-sans text-xs font-bold text-primary">View →</span>
              </Link>

              {/* Full card (md and up) */}
              <div className="hidden md:flex md:flex-col md:gap-2.5 md:p-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-strong">
                    <Bell className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-accent-strong">
                    Announcement
                  </p>
                </div>
                <h2 className="font-serif text-base font-bold leading-snug text-primary">{featured.title}</h2>
                <p className="line-clamp-3 text-sm leading-relaxed text-foreground/80">{featured.summary}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                  <Link
                    to={`/announcements/${featured.id}`}
                    className="font-sans text-sm font-bold text-primary hover:underline"
                  >
                    View details
                  </Link>
                  <Link to="/announcements" className="font-sans text-sm font-semibold text-muted-foreground hover:underline">
                    All announcements
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="mx-auto w-28 sm:w-32 md:mx-0 md:w-full md:max-w-[200px]">
            <img
              src="/images/periyavar.webp"
              alt="His Holiness Sri Sri Chandrashekarendra Saraswati MahaSwamigal, founder-inspiration of Veda Rakshana Nidhi Trust"
              width={640}
              height={720}
              className="aspect-[4/5] w-full rounded-lg border border-accent/60 object-cover shadow-lifted"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
