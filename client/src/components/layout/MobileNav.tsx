import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PRIMARY_NAV, DONATE_LINK, LOGIN_URL } from "@/lib/navigation";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const location = useLocation();

  // Close the menu automatically whenever the route changes.
  useEffect(() => {
    onOpenChange(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="z-drawer flex w-full flex-col gap-0 bg-background p-0 sm:max-w-sm"
      >
        <SheetHeader className="border-b border-border px-5 py-3 text-left">
          <SheetTitle className="font-serif text-lg text-primary">Menu</SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>

        {/* Donate + Login pinned right below the header -- always visible
            without scrolling, since visitors specifically look for these
            (unlike the old layout, which buried them at the bottom of a
            list long enough to require a scroll on most phones). */}
        <div className="flex shrink-0 gap-2 border-b border-border px-4 py-3">
          <Button asChild variant="accent" className="flex-1">
            <Link to={DONATE_LINK.path}>{DONATE_LINK.label}</Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </Button>
        </div>

        {/* Nav list: two columns instead of one so every destination fits
            without scrolling on typical phones; still scrolls as a fallback
            on very short screens or with enlarged text/zoom. */}
        <nav aria-label="Mobile" className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            {PRIMARY_NAV.map((group) =>
              group.links.length > 1 ? (
                <div key={group.label} className="col-span-2">
                  <p className="px-3 pb-1 pt-2 font-sans text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {group.label}
                  </p>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {group.links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="flex min-h-11 items-center rounded-md px-3 py-2.5 font-sans text-base font-semibold text-foreground hover:bg-muted"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={group.links[0].path}
                  to={group.links[0].path}
                  className="col-span-2 flex min-h-11 items-center rounded-md px-3 py-2.5 font-sans text-base font-semibold text-foreground hover:bg-muted"
                >
                  {group.label}
                </Link>
              )
            )}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
