import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import { ANNOUNCEMENTS, getFeaturedAnnouncement } from "@/lib/announcements";

/**
 * A single, non-obstructive announcement card. Unlike the old auto-opening
 * fixed-position drawer, this sits in normal document flow and never covers
 * page content. The full list always lives at /announcements.
 */
export default function AnnouncementTeaser() {
  if (ANNOUNCEMENTS.length === 0) {
    return null;
  }

  const featured = getFeaturedAnnouncement();

  return (
    <section className="border-b border-border bg-accent/10">
      <div className="mx-auto max-w-wide px-4 py-6 sm:px-6">
        <div className="flex flex-col items-start gap-4 rounded-lg border border-accent/40 bg-surface p-5 shadow-soft sm:flex-row sm:items-center">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
            <Bell className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-accent">Announcement</p>
            <h2 className="font-serif text-lg font-bold text-primary">{featured.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-foreground/80">{featured.summary}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3 self-start sm:self-center">
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
    </section>
  );
}
