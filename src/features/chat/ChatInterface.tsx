'use client';

import { useMemo, useState } from 'react';
import Typography from '../../components/typography';
import ChatSidebar from './components/ChatSidebar';
import MessageInput from './components/MessageInput';
import MessageThread from './components/MessageThread';
import {
  breadcrumbs,
  conversations as initialConversations,
  threadByConversation,
} from './data';
import type { ConversationRecord } from './data';
import type { ChatMessage, Conversation } from './types';
import styles from './ChatInterface.module.css';

const createMessage = (content: string): ChatMessage => ({
  id: `local-${Date.now()}`,
  author: 'You',
  timestamp: new Date().toISOString(),
  content,
  isOwn: true,
});

const ChatInterface = () => {
  const [conversationList, setConversationList] = useState<Conversation[]>(initialConversations);
  const [activeConversationId, setActiveConversationId] = useState<string>(
    initialConversations[0]?.id ?? '',
  );
  const [threads, setThreads] = useState<ConversationRecord>(threadByConversation);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const activeConversation = useMemo(
    () => conversationList.find((conversation) => conversation.id === activeConversationId),
    [conversationList, activeConversationId],
  );

  const activeMessages = useMemo(() => threads[activeConversationId] ?? [], [threads, activeConversationId]);

  const handleConversationSelect = (conversationId: string) => {
    setActiveConversationId(conversationId);
    setSidebarOpen(false);
  };

  const handleMessageSubmit = (message: string) => {
    setThreads((existing) => {
      const conversationMessages = existing[activeConversationId] ?? [];
      return {
        ...existing,
        [activeConversationId]: [...conversationMessages, createMessage(message)],
      };
    });

    setConversationList((prev) =>
      prev.map((conversation) =>
        conversation.id === activeConversationId
          ? {
              ...conversation,
              preview: message,
              unreadCount: undefined,
            }
          : conversation,
      ),
    );
  };

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  if (!activeConversation) {
    return null;
  }

  return (
    <div className={styles.shell}>
      <div className={styles.viewport}>
        <div className={styles.sidebarWrapper} data-open={isSidebarOpen}>
          <div className={styles.sidebarPanel}>
            <ChatSidebar
              breadcrumbs={breadcrumbs}
              conversations={conversationList}
              selectedConversationId={activeConversationId}
              onSelect={handleConversationSelect}
              onDismiss={closeSidebar}
            />
          </div>
        </div>

        <section className={styles.threadArea} aria-labelledby="conversation-title">
          <header className={styles.threadHeader}>
            <button type="button" className={styles.openSidebarButton} onClick={openSidebar}>
              Conversations
            </button>
            <div>
              <Typography.H1 id="conversation-title" className={styles.threadTitle} noMargin>
                {activeConversation.title}
              </Typography.H1>
              <Typography.Body
                as="p"
                size="small"
                tone="subtle"
                noMargin
                className={styles.threadSubtitle}
              >
                {activeConversation.participants.join(' • ')}
              </Typography.Body>
            </div>
          </header>

          <main className={styles.messagesRegion} role="main" tabIndex={-1} aria-live="polite">
            <MessageThread messages={activeMessages} />
          </main>

          <MessageInput onSubmit={handleMessageSubmit} />
        </section>
      </div>
    </div>
  );
};

export default ChatInterface;
