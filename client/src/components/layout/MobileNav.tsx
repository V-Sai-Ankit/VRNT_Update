import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
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
        className="z-drawer flex w-full flex-col gap-0 overflow-y-auto bg-background p-0 sm:max-w-sm"
      >
        <SheetHeader className="border-b border-border px-5 py-4 text-left">
          <SheetTitle className="font-serif text-lg text-primary">Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-1 px-3 py-4">
          {PRIMARY_NAV.map((group) => (
            <div key={group.label} className="mb-2">
              {group.links.length > 1 && (
                <p className="px-3 pb-1 pt-2 font-sans text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {group.label}
                </p>
              )}
              {group.links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block min-h-11 rounded-md px-3 py-2.5 font-sans text-base font-semibold text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-2 border-t border-border px-4 py-4">
          <Button asChild variant="accent" size="lg" className="w-full">
            <Link to={DONATE_LINK.path}>{DONATE_LINK.label}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full">
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
