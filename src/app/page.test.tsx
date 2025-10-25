import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatPage from "./page";

describe("ChatPage", () => {
  it("renders the initial chat transcript and allows composing a message", async () => {
    const user = userEvent.setup();

    render(<ChatPage />);

    expect(screen.getByRole("heading", { name: /conversational intelligence/i })).toBeInTheDocument();
    expect(screen.getByText(/welcome to chat.telos/i)).toBeInTheDocument();

    const composer = screen.getByLabelText(/message/i);
    await user.type(composer, "Status update on Helios roadmap?");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(composer).toHaveValue("");
    expect(screen.getByText(/status update on helios roadmap/i)).toBeInTheDocument();
  });
});
