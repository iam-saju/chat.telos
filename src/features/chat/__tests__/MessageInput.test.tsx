import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MessageInput from '../components/MessageInput';

describe('MessageInput', () => {
  it('submits the current message when Enter is pressed', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<MessageInput onSubmit={handleSubmit} />);

    const textarea = screen.getByRole('textbox', { name: /type your message/i });

    await user.type(textarea, 'This is a test message');
    await user.keyboard('{Enter}');

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith('This is a test message');
    expect(textarea).toHaveValue('');
  });

  it('allows newline insertion with Shift+Enter', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<MessageInput onSubmit={handleSubmit} />);

    const textarea = screen.getByRole('textbox', { name: /type your message/i });

    await user.type(textarea, 'Line one');
    await user.keyboard('{Shift>}{Enter}{/Shift}');
    await user.type(textarea, 'Line two');

    expect(textarea).toHaveValue('Line one\nLine two');
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it('prevents submission when the message is empty', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    render(<MessageInput onSubmit={handleSubmit} />);

    const textarea = screen.getByRole('textbox', { name: /type your message/i });

    await user.keyboard('{Enter}');
    expect(handleSubmit).not.toHaveBeenCalled();

    await user.type(textarea, '   ');
    await user.keyboard('{Enter}');
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
