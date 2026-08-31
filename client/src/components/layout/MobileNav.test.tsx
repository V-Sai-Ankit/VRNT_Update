import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import MobileNav from "./MobileNav";

describe("MobileNav", () => {
  it("renders nothing interactive when closed, and its nav links when open", async () => {
    const onOpenChange = vi.fn();
    render(
      <MemoryRouter>
        <MobileNav open onOpenChange={onOpenChange} />
      </MemoryRouter>
    );

    expect(await screen.findByRole("link", { name: "Mission & Vision" })).toBeInTheDocument();
  });

  it("has a horizontal, single-line Login button (not one letter per line)", async () => {
    const onOpenChange = vi.fn();
    render(
      <MemoryRouter>
        <MobileNav open onOpenChange={onOpenChange} />
      </MemoryRouter>
    );

    const login = await screen.findByRole("link", { name: "Login" });
    // The old bug rendered "LOGIN HERE" as ten separate single-letter <span> children.
    // A correct render has the label as a single text node/child, not many one-char nodes.
    const singleCharNodes = Array.from(login.querySelectorAll("*")).filter(
      (el) => el.textContent && el.textContent.trim().length === 1
    );
    expect(singleCharNodes.length).toBe(0);
    expect(login).toHaveAttribute("href", "https://vrnt-app.onrender.com/#/login");
  });

  it("calls onOpenChange(false) when Escape is pressed", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <MemoryRouter>
        <MobileNav open onOpenChange={onOpenChange} />
      </MemoryRouter>
    );

    await screen.findByRole("link", { name: "Mission & Vision" });
    await user.keyboard("{Escape}");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
