import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import { PRIMARY_NAV } from "@/lib/navigation";

/**
 * Regression test for a real release-blocking bug: the desktop nav links
 * used `text-secondary-foreground` (a near-white token meant for text on
 * the dark navy --secondary background) while sitting on the light header
 * background, making every nav label nearly invisible. This test asserts
 * the fix (a dark, readable token) directly on the rendered className,
 * plus the general shape: no nav item may render a "*-foreground" text
 * color class, since every "-foreground" token in this design system is
 * paired with its own matching dark/colored background, never the plain
 * light header background.
 */
describe("Header desktop navigation contrast", () => {
  function renderHeader() {
    return render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  }

  it("never uses a *-foreground text color class on a direct nav link (wrong on the light header bg)", async () => {
    renderHeader();
    const nav = await screen.findByRole("navigation", { name: "Primary" });
    const items = nav.querySelectorAll("a, button");
    expect(items.length).toBeGreaterThan(0);
    for (const el of items) {
      const cls = el.getAttribute("class") ?? "";
      expect(cls).not.toMatch(/\btext-\S*-foreground\b/);
    }
  });

  it("uses a dark, readable text color on direct nav links and dropdown triggers", async () => {
    renderHeader();
    const nav = await screen.findByRole("navigation", { name: "Primary" });
    // Direct links (single-link groups, e.g. Home/Vedas/Contact)
    for (const group of PRIMARY_NAV.filter((g) => g.links.length === 1)) {
      const link = await screen.findByRole("link", { name: group.label });
      expect(link.className).toMatch(/\btext-(secondary|foreground|primary)\b/);
    }
    // Dropdown triggers (multi-link groups, e.g. About/Programs/Media)
    for (const group of PRIMARY_NAV.filter((g) => g.links.length > 1)) {
      const trigger = await screen.findByRole("button", { name: new RegExp(group.label) });
      expect(trigger.className).toMatch(/\btext-(secondary|foreground|primary)\b/);
    }
    expect(nav).toBeInTheDocument();
  });

  it("never suppresses the outline (outline-none/focus:outline-none) without a compensating ring", async () => {
    // Regression test: the header's logo link and the dropdown trigger base
    // style both used to set `focus-visible:outline-none`/`focus:outline-none`
    // with no replacement focus indicator, making keyboard focus invisible.
    // The Button component is the one legitimate exception -- it pairs
    // `focus-visible:outline-none` with a `focus-visible:ring-2` box-shadow
    // ring instead, which is an equally-visible alternative.
    renderHeader();
    const header = screen.getByRole("banner");
    const candidates = header.querySelectorAll("a, button");
    for (const el of candidates) {
      const cls = el.getAttribute("class") ?? "";
      const suppressesOutline = /\boutline-none\b/.test(cls);
      if (suppressesOutline) {
        expect(cls).toMatch(/\bring-2\b/);
      }
    }
  });
});
