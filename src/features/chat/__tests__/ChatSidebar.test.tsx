import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChatSidebar from '../components/ChatSidebar';
import type { Breadcrumb, Conversation } from '../types';

const mockConversations: Conversation[] = [
  {
    id: 'one',
    title: 'First Thread',
    preview: 'A quick update on the first thread.',
    participants: ['Amelia', 'Drew'],
    unreadCount: 1,
  },
  {
    id: 'two',
    title: 'Second Thread',
    preview: 'Notes from the second thread review.',
    participants: ['Morgan', 'Priya'],
  },
];

const mockBreadcrumbs: Breadcrumb[] = [
  { id: 'team', label: 'Core Team' },
  { id: 'channel', label: 'Launch Prep' },
];

describe('ChatSidebar', () => {
  it('renders conversations and updates selection when clicked', async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();

    render(
      <ChatSidebar
        breadcrumbs={mockBreadcrumbs}
        conversations={mockConversations}
        selectedConversationId="one"
        onSelect={handleSelect}
      />,
    );

    const firstConversation = screen.getByRole('button', { name: /first thread/i });
    const secondConversation = screen.getByRole('button', { name: /second thread/i });

    expect(firstConversation).toHaveAttribute('aria-pressed', 'true');
    expect(secondConversation).toHaveAttribute('aria-pressed', 'false');

    await user.click(secondConversation);

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith('two');
  });

  it('displays breadcrumb trail', () => {
    render(
      <ChatSidebar
        breadcrumbs={mockBreadcrumbs}
        conversations={mockConversations}
        selectedConversationId="one"
        onSelect={() => undefined}
      />,
    );

    expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toHaveTextContent(
      'Core Team',
    );
    expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toHaveTextContent(
      'Launch Prep',
    );
  });
});
