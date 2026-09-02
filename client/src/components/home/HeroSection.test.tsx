import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeroSection from "./HeroSection";
import { getFeaturedAnnouncement } from "@/lib/announcements";

/** Escapes regex special characters (announcement titles can contain "()", etc). */
function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Regression coverage for an explicit product requirement: the featured
 * announcement must be part of the hero itself (so it's visible without
 * scrolling), not a separate section rendered below it. jsdom doesn't do
 * real layout, so this can't assert pixel position -- instead it asserts
 * the structural guarantee that keeps it near the top: the announcement
 * link lives inside the same <section> as the <h1>, and both the compact
 * mobile banner and the full desktop card are present (CSS breakpoints
 * decide which one is visible, but both render).
 */
describe("HeroSection announcement placement", () => {
  it("renders the featured announcement inside the hero's own <section>", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", { level: 1 });
    const heroSection = heading.closest("section");
    expect(heroSection).not.toBeNull();

    const featured = getFeaturedAnnouncement();
    const announcementLinks = screen.getAllByRole("link", { name: new RegExp(escapeRegExp(featured.title)) });
    expect(announcementLinks.length).toBeGreaterThan(0);
    for (const link of announcementLinks) {
      expect(heroSection).toContainElement(link);
    }
  });

  it("renders both a compact mobile banner and a full desktop card (CSS decides which shows)", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    const featured = getFeaturedAnnouncement();

    // Compact banner: one link whose whole row (title + "View") is hidden at lg:.
    const banners = screen.getAllByRole("link", { name: new RegExp(escapeRegExp(featured.title)) });
    const compact = banners.find((el) => /\blg:hidden\b/.test(el.className));
    expect(compact).toBeDefined();
    expect(compact!.textContent).toContain("View");

    // Full card: separate "View details" + "All announcements" links, plus the summary text.
    expect(screen.getByRole("link", { name: "View details" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "All announcements" })).toBeInTheDocument();
    expect(screen.getByText(featured.summary)).toBeInTheDocument();
  });
});
