import "@testing-library/jest-dom/vitest";
import { vi, beforeEach } from "vitest";

// jsdom doesn't implement window.scrollTo, so App.tsx's real scroll-reset
// effect (ScrollToTop, see App.tsx) throws a "Not implemented" console error
// on every render in every test. Stub it as a no-op so tests exercise the
// real component code path (the effect still runs and calls scrollTo) without
// that noise -- this does NOT touch or weaken the app's actual scroll-reset
// behavior, which only exists in the browser.
beforeEach(() => {
  window.scrollTo = vi.fn();
});
