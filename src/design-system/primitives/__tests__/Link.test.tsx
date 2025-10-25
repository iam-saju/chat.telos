import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Link } from '..';

describe('Link', () => {
  it('renders external icon for external destinations', () => {
    render(<Link href="https://example.com">External resource</Link>);
    const anchor = screen.getByRole('link', { name: /external resource/i });

    expect(anchor).toHaveAttribute('target', '_blank');
    expect(anchor).toHaveAttribute('rel', expect.stringContaining('noopener'));
    expect(anchor).toHaveAttribute('rel', expect.stringContaining('noreferrer'));
    expect(anchor.querySelector('svg')).toBeInTheDocument();
  });

  it('omits the external icon when requested', () => {
    render(
      <Link href="https://example.com" showExternalIcon={false}>
        External resource
      </Link>,
    );
    const anchor = screen.getByRole('link', { name: /external resource/i });

    expect(anchor.querySelector('svg')).not.toBeInTheDocument();
  });

  it('marks focus visibility when reached via keyboard navigation', async () => {
    const user = userEvent.setup();
    render(
      <>
        <button type="button">before</button>
        <Link href="/docs">Documentation</Link>
      </>,
    );

    await user.tab();
    await user.tab();

    const anchor = screen.getByRole('link', { name: /documentation/i });
    expect(anchor).toHaveAttribute('data-focus-visible', 'true');
  });

  it('prevents clicks and removes tab stop when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Link href="/docs" disabled onClick={handleClick}>
        Documentation
      </Link>,
    );

    const anchor = screen.getByRole('link', { name: /documentation/i });
    await user.click(anchor);

    expect(handleClick).not.toHaveBeenCalled();
    expect(anchor).toHaveAttribute('aria-disabled', 'true');
    expect(anchor).toHaveAttribute('tabindex', '-1');
  });
});
