import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

describe("App routing", () => {
  it("renders the homepage hero content at /", async () => {
    renderAt("/");
    expect(await screen.findByRole("heading", { level: 1, name: /preserving the eternal veda dharma/i })).toBeInTheDocument();
  });

  it("renders the site name in the header, linking home", async () => {
    renderAt("/");
    expect(await screen.findAllByText(/veda rakshana nidhi trust/i)).not.toHaveLength(0);
  });

  it("renders a real 404 page for an unmatched route (not the homepage)", async () => {
    renderAt("/this-route-does-not-exist");
    expect(await screen.findByRole("heading", { level: 1, name: /page not found/i })).toBeInTheDocument();
    expect(screen.queryByText(/preserving the eternal veda dharma/i)).not.toBeInTheDocument();
  });

  it("exposes a skip-to-content link as the first focusable element", async () => {
    renderAt("/");
    const skipLink = await screen.findByText(/skip to main content/i);
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders a Login link pointing at the external VRNT app, opened in a new tab", async () => {
    renderAt("/");
    const loginLinks = await screen.findAllByRole("link", { name: /login/i });
    expect(loginLinks.length).toBeGreaterThan(0);
    for (const link of loginLinks) {
      expect(link).toHaveAttribute("href", "https://vrnt-app.onrender.com/#/login");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noopener");
      expect(link.getAttribute("rel")).toContain("noreferrer");
    }
  });
});
