import { useEffect, useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { PRIMARY_NAV, DONATE_LINK, LOGIN_URL } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

// Nav text sits on the light header background, so it needs a dark,
// high-contrast color -- NOT `text-secondary-foreground` (that token is
// near-white, meant for text on the dark navy `--secondary` background,
// not for the header itself). `text-secondary` (navy) is verified at
// 13.5:1 contrast against the header background; `text-primary` (maroon)
// on hover/active/open is verified at 7.75:1. See Header.test.tsx.
// Note: react-router-dom's NavLink marks the current page via
// `aria-current="page"`, not a `data-active` attribute -- the previous
// `data-[active=true]:` selector here never actually matched anything.
const linkClasses =
  "inline-flex h-10 items-center rounded-md px-3 text-sm font-sans font-semibold text-secondary transition-colors hover:bg-secondary/10 hover:text-primary aria-[current=page]:text-primary aria-[current=page]:bg-primary/5";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-header w-full border-b bg-background/95 backdrop-blur transition-shadow duration-200",
        scrolled ? "shadow-md border-border" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-wide items-center gap-3 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3 rounded-md">
          <img
            src="/images/logo.webp"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full border border-accent object-cover"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-serif text-base font-bold text-primary sm:text-lg">
              Veda Rakshana Nidhi Trust
            </span>
            <span className="hidden text-[11px] font-sans uppercase tracking-wider text-muted-foreground sm:block">
              Established 1963
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="ml-auto hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              {PRIMARY_NAV.map((group) =>
                group.links.length === 1 ? (
                  <NavigationMenuItem key={group.label}>
                    <NavigationMenuLink asChild>
                      <RouterNavLink to={group.links[0].path} className={linkClasses}>
                        {group.label}
                      </RouterNavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={group.label}>
                    <NavigationMenuTrigger className="h-10 bg-transparent px-3 font-sans text-sm font-semibold text-secondary hover:bg-secondary/10 hover:text-primary data-[state=open]:bg-secondary/10 data-[state=open]:text-primary">
                      {group.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-64 gap-1 p-2">
                        {group.links.map((link) => (
                          <li key={link.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={link.path}
                                className="block rounded-md px-3 py-2 text-sm font-sans font-medium text-foreground hover:bg-muted"
                              >
                                {link.label}
                                {link.description && (
                                  <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                                    {link.description}
                                  </span>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-3">
          <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
            <Link to={DONATE_LINK.path}>{DONATE_LINK.label}</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </Button>

          <button
            type="button"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-secondary hover:bg-secondary/10 lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
    </header>
  );
}
