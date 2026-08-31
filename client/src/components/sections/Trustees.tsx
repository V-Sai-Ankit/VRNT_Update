import { User, Phone, Mail, MapPin } from 'lucide-react';
import { Helmet } from '@/lib/seo';
import { SITE_CONTENT } from '@/lib/constants';

export default function TrusteesPage() {
  const trusteesList = SITE_CONTENT.trustees;

  return (
    <div className="mx-auto flex w-full max-w-wide flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
      <Helmet
        title="List of Trustees"
        description="Meet the trustees of Veda Rakshana Nidhi Trust, the dedicated individuals overseeing the Trust's mission to preserve and promote Vedic education."
      />

      {/* Page Header */}
      <section className="border-t border-border pt-6">
        <h1 className="m-0 font-serif text-3xl font-bold text-primary underline decoration-accent decoration-4 underline-offset-8 sm:text-4xl lg:text-5xl">
          List of Trustees
        </h1>
        <p className="mt-6 font-serif text-base italic text-muted-foreground sm:text-lg">
          Dedicated individuals overseeing the mission of Veda Rakshana Nidhi Trust.
        </p>
      </section>

      {/* Two-Column Grid matching screenshots */}
      <section className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {trusteesList.map((trustee, idx) => {
          const hasContactInfo = Boolean(trustee.contact || trustee.email || trustee.address);
          return (
            <div
              key={idx}
              className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 shadow-soft transition-shadow hover:shadow-lifted"
            >
              <div className="flex items-center gap-4">
                {/* Round User Icon Container */}
                <div className="flex shrink-0 items-center justify-center rounded-full border border-accent/40 bg-background p-3 text-accent-strong shadow-soft">
                  <User className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                </div>

                {/* Content Context Block */}
                <div className="flex min-w-0 flex-col gap-1">
                  <h2 className="m-0 truncate font-serif text-lg font-bold uppercase tracking-wide text-foreground md:text-xl">
                    {trustee.name}
                  </h2>
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent-strong">
                    {trustee.role}
                  </span>
                </div>
              </div>

              {hasContactInfo && (
                <div className="flex flex-col gap-1.5 border-t border-border pt-3 font-sans text-sm text-muted-foreground">
                  {trustee.contact && (
                    <a
                      href={`tel:${trustee.contact}`}
                      className="inline-flex min-h-9 items-center gap-2 hover:text-primary hover:underline"
                    >
                      <Phone className="h-3.5 w-3.5 shrink-0 text-accent-strong" aria-hidden="true" />
                      {trustee.contact}
                    </a>
                  )}
                  {trustee.email && (
                    <a
                      href={`mailto:${trustee.email}`}
                      className="inline-flex min-h-9 items-center gap-2 break-all hover:text-primary hover:underline"
                    >
                      <Mail className="h-3.5 w-3.5 shrink-0 text-accent-strong" aria-hidden="true" />
                      {trustee.email}
                    </a>
                  )}
                  {trustee.address && (
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-strong" aria-hidden="true" />
                      <span>{trustee.address}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
