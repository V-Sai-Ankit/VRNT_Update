import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-wide items-center gap-8 px-4 py-10 sm:px-6 sm:py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:py-20">
        {/* Content comes first in document order so mobile visitors reach the
            heading, mission excerpt, and calls to action immediately -- the
            portrait no longer needs to render (and load) before them. */}
        <div>
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

        {/* A modest, dignified portrait -- capped width on mobile so it reads
            as a supporting image rather than consuming the first viewport;
            grows to a full-height column on the desktop two-column layout. */}
        <div className="mx-auto w-48 sm:w-64 md:mx-0 md:w-full">
          <img
            src="/images/periyavar.webp"
            alt="His Holiness Sri Sri Chandrashekarendra Saraswati MahaSwamigal, founder-inspiration of Veda Rakshana Nidhi Trust"
            width={640}
            height={720}
            className="aspect-[4/5] w-full rounded-lg border border-accent/60 object-cover shadow-lifted"
          />
        </div>
      </div>
    </section>
  );
}
