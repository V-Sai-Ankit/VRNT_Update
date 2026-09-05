import { Link } from "react-router-dom";
import { SITE_CONTENT } from "@/lib/constants";

/**
 * The Trust's central metaphor, shown once on the homepage. The Sanskrit
 * verse, its image, and Maha Periyava's message each appear exactly once
 * here — the old prototype showed variants of this content on more than
 * one section at a time.
 */
export default function VedaVrukshamFeature() {
  return (
    <section className="border-b border-border py-12 sm:py-16">
      <div className="mx-auto max-w-wide px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-2 font-sans text-xs font-bold uppercase tracking-wider text-accent-strong">
            Our Guiding Metaphor
          </p>
          <h2 className="font-serif text-2xl font-bold text-primary sm:text-3xl">
            {SITE_CONTENT.vedaVruksham.title}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1.2fr_1fr]">
          <div className="rounded-lg border border-border bg-surface p-6 shadow-soft">
            <p className="text-justify font-serif text-lg leading-loose text-primary">
              वेदो वृक्षः मूलकान्यत्र विप्राः।<br />
              अङ्गाः शाखाः धर्मकर्माणि पत्रम्॥<br />
              तस्मान्मूलं यत्नतो रक्षणीयं।<br />
              छिन्ने मूले नैव शाखा न वृक्षः॥
            </p>
          </div>

          <img
            src="/images/veda-vruksha-original-new.webp"
            alt="Veda Vruksham — an illustrated diagram of the Vedas as a tree, showing its branches and recensions"
            loading="lazy"
            width={780}
            height={780}
            className="mx-auto w-full max-w-lg rounded-lg border border-border object-contain shadow-soft"
          />

          <div className="rounded-lg border border-border bg-surface p-6 shadow-soft">
            <p className="text-left leading-relaxed text-foreground/90">{SITE_CONTENT.vedaVruksham.english}</p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl border-y-2 border-double border-accent/60 py-4 text-center font-serif text-base font-semibold uppercase tracking-wide text-primary">
          Watering the roots of the Vedic tree is necessary to arrest its decay
        </p>

        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-start justify-between gap-4 rounded-xl border border-accent/50 bg-primary p-6 text-primary-foreground sm:flex-row sm:items-center">
          <div>
            <h3 className="font-serif text-xl font-bold">Maha Periyava's Message</h3>
            <p className="mt-1 text-sm text-primary-foreground/85">
              Read the divine guidance and appeal regarding the protection and preservation of the Vedas.
            </p>
          </div>
          <Link
            to="/vedas/maha-periyavas-message"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 font-sans text-sm font-bold text-accent-foreground hover:bg-accent/90"
          >
            Read full message <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
