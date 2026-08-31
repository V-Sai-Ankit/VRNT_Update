import { describe, it, expect } from "vitest";
import { ANNOUNCEMENTS, getFeaturedAnnouncement, getAnnouncementById } from "./announcements";

describe("announcements model", () => {
  it("has exactly one featured announcement for the homepage teaser", () => {
    const featured = ANNOUNCEMENTS.filter((a) => a.priority === "featured");
    expect(featured).toHaveLength(1);
  });

  it("getFeaturedAnnouncement returns the featured one", () => {
    const featured = getFeaturedAnnouncement();
    expect(featured.priority).toBe("featured");
  });

  it("every announcement has a unique id", () => {
    const ids = ANNOUNCEMENTS.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("getAnnouncementById resolves a known id and returns undefined for an unknown one", () => {
    const known = ANNOUNCEMENTS[0];
    expect(getAnnouncementById(known.id)).toEqual(known);
    expect(getAnnouncementById("does-not-exist")).toBeUndefined();
  });

  it("every internal-link action targets a path, not an external URL", () => {
    for (const a of ANNOUNCEMENTS) {
      for (const action of a.actions) {
        if (action.type === "internal-link") {
          expect(action.targetPath.startsWith("/")).toBe(true);
        }
        if (action.type === "external-link" || action.type === "download-link") {
          expect(action.url.length).toBeGreaterThan(0);
        }
      }
    }
  });
});
