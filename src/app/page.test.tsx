import { render, screen } from "@testing-library/react";
import HomePage from "./(routes)/page";

describe("HomePage", () => {
  it("renders the scaffold hero and key sections", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 1, name: /future of chat telos/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /opinionated, antikythera-inspired foundations/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /fonts and structure/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: /ready for the chat ui that follows/i })).toBeInTheDocument();

    const navLinks = screen.getAllByRole("link", { name: /tokens|foundations|roadmap/i });
    expect(navLinks).toHaveLength(3);
  });
});
