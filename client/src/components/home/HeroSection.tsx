import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SITE_CONTENT } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-wide items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div>
          <p className="mb-3 font-sans text-xs font-bold uppercase tracking-wider text-accent-strong">
            Established 1963 · Public Charitable Trust
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-primary sm:text-5xl">
            Preserving the Eternal Veda Dharma
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/90">
            {SITE_CONTENT.mission.detailed}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/donate">Support the Trust</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/mission">Learn about our mission</Link>
            </Button>
          </div>
        </div>

        <div className="order-first md:order-last">
          <img
            src="/images/periyavar.jpg"
            alt="His Holiness Sri Sri Chandrashekarendra Saraswati MahaSwamigal, founder-inspiration of Veda Rakshana Nidhi Trust"
            width={640}
            height={720}
            className="mx-auto aspect-[4/5] w-full max-w-sm rounded-lg border border-accent/60 object-cover shadow-lifted"
          />
        </div>
      </div>
    </section>
  );
}
