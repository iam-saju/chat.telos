import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '..';

describe('Button', () => {
  it('uses the ghost variant by default', () => {
    render(<Button>Submit</Button>);
    const button = screen.getByRole('button', { name: /submit/i });

    expect(button.dataset.variant).toBe('ghost');
  });

  it('exposes configured variants', () => {
    render(
      <Button variant="link" type="button">
        Learn more
      </Button>,
    );
    const button = screen.getByRole('button', { name: /learn more/i });

    expect(button.dataset.variant).toBe('link');
  });

  it('toggles focus-visible data attribute on keyboard focus', async () => {
    const user = userEvent.setup();
    render(<Button>Focusable</Button>);

    await user.tab();

    const button = screen.getByRole('button', { name: /focusable/i });
    expect(button).toHaveAttribute('data-focus-visible', 'true');
  });

  it('prevents click handlers when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Cannot click
      </Button>,
    );
    const button = screen.getByRole('button', { name: /cannot click/i });

    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
