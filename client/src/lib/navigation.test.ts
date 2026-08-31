import { describe, it, expect } from "vitest";
import { PRIMARY_NAV, PRIMARY_NAV_FLAT, DONATE_LINK, LOGIN_URL, FOOTER_LINKS } from "./navigation";

describe("navigation model", () => {
  it("points Login at the existing external VRNT application, unchanged", () => {
    expect(LOGIN_URL).toBe("https://vrnt-app.onrender.com/#/login");
  });

  it("every nav path is a real internal route (starts with /, no external URLs)", () => {
    for (const link of PRIMARY_NAV_FLAT) {
      expect(link.path.startsWith("/")).toBe(true);
      expect(link.path).not.toContain("http");
    }
    expect(DONATE_LINK.path.startsWith("/")).toBe(true);
  });

  it("has no duplicate paths across the primary nav", () => {
    const paths = PRIMARY_NAV_FLAT.map((l) => l.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("includes the home route exactly once", () => {
    expect(PRIMARY_NAV_FLAT.filter((l) => l.path === "/")).toHaveLength(1);
  });

  it("every nav group has at least one link", () => {
    for (const group of PRIMARY_NAV) {
      expect(group.links.length).toBeGreaterThan(0);
    }
  });

  it("footer links include Donate and every primary nav destination except Home", () => {
    expect(FOOTER_LINKS).toContainEqual(DONATE_LINK);
    expect(FOOTER_LINKS.some((l) => l.path === "/")).toBe(false);
  });
});
