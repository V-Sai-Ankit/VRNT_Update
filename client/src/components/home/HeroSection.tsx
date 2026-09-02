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
      <div className="mx-auto max-w-wide px-4 py-8 sm:px-6 sm:py-12 md:py-16">
        {/* See the ".hero-grid" rule in index.css for how these six areas are
            arranged differently on mobile/tablet vs. desktop (1024px+, same
            breakpoint the header itself switches at) -- both above the
            fold, no scrolling required, at every required viewport width. */}
        <div className="hero-grid">
          <p
            style={{ gridArea: "eyebrow" }}
            className="mb-1 font-sans text-xs font-bold uppercase tracking-wider text-accent-strong md:mb-0"
          >
            Established 1963 · Public Charitable Trust
          </p>

          <h1
            style={{ gridArea: "heading" }}
            className="font-serif text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl"
          >
            Preserving the Eternal Veda Dharma
          </h1>

          <p
            style={{ gridArea: "excerpt" }}
            className="min-w-0 max-w-xl text-base leading-relaxed text-foreground/90 sm:text-lg"
          >
            {HERO_EXCERPT}
          </p>

          <div style={{ gridArea: "ctas" }} className="flex flex-col gap-2 self-start sm:flex-row sm:gap-3">
            <Button asChild size="lg">
              <Link to="/donate">Support the Trust</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/mission">Learn about our mission</Link>
            </Button>
          </div>

          {/* Founder portrait -- a compact thumbnail beside the CTAs on
              mobile, a full-height column next to the text on desktop. */}
          <div style={{ gridArea: "photo" }} className="w-20 shrink-0 self-start sm:w-24 lg:h-full lg:w-full">
            <img
              src="/images/periyavar.webp"
              alt="His Holiness Sri Sri Chandrashekarendra Saraswati MahaSwamigal, founder-inspiration of Veda Rakshana Nidhi Trust"
              width={640}
              height={720}
              className="aspect-[4/5] h-full w-full rounded-lg border border-accent/60 object-cover shadow-lifted"
            />
          </div>

          {/* Announcement -- a horizontal banner below the CTA/photo row on
              mobile, a full-height vertical card next to the photo on
              desktop. Same element either way, just restyled by breakpoint. */}
          {featured && (
            <div
              style={{ gridArea: "announcement" }}
              className="min-w-0 rounded-lg border border-accent/40 bg-background shadow-soft lg:flex lg:flex-col lg:self-center"
            >
              {/* Horizontal banner (mobile and tablet, below lg) */}
              <Link
                to={`/announcements/${featured.id}`}
                className="flex min-h-11 items-center gap-2.5 px-4 py-2.5 lg:hidden"
              >
                <Bell className="h-4 w-4 shrink-0 text-accent-strong" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate font-sans text-sm font-semibold text-foreground">
                  {featured.title}
                </span>
                <span className="shrink-0 font-sans text-xs font-bold text-primary">View →</span>
              </Link>

              {/* Vertical card (lg and up -- matches the header's own desktop breakpoint) */}
              <div className="hidden min-w-0 lg:flex lg:flex-col lg:gap-2.5 lg:p-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-strong">
                    <Bell className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <p className="min-w-0 break-words font-sans text-xs font-bold uppercase tracking-wider text-accent-strong">
                    Announcement
                  </p>
                </div>
                <h2 className="min-w-0 font-serif text-base font-bold leading-snug text-primary">{featured.title}</h2>
                <p className="line-clamp-[8] min-w-0 text-sm leading-relaxed text-foreground/80">{featured.summary}</p>
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
        </div>
      </div>
    </section>
  );
}
