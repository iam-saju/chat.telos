'use client';

import type { Breadcrumb, Conversation } from '../types';
import styles from './ChatSidebar.module.css';

type ChatSidebarProps = {
  conversations: Conversation[];
  breadcrumbs: Breadcrumb[];
  selectedConversationId: string;
  onSelect: (conversationId: string) => void;
  onDismiss?: () => void;
};

const renderBreadcrumbs = (breadcrumbs: Breadcrumb[]) => {
  return breadcrumbs.map((crumb, index) => (
    <span key={crumb.id}>
      {crumb.label}
      {index < breadcrumbs.length - 1 ? (
        <span aria-hidden="true" className={styles.breadcrumbSeparator}>
          /
        </span>
      ) : null}
    </span>
  ));
};

const ChatSidebar = ({
  conversations,
  breadcrumbs,
  selectedConversationId,
  onSelect,
  onDismiss,
}: ChatSidebarProps) => {
  return (
    <aside className={styles.sidebar} aria-label="Conversations">
      {onDismiss ? (
        <button type="button" className={styles.closeButton} onClick={onDismiss}>
          Close
        </button>
      ) : null}

      <div>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          {renderBreadcrumbs(breadcrumbs)}
        </nav>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Conversations</h2>
        </div>
      </div>

      <ul className={styles.conversationList}>
        {conversations.map((conversation) => {
          const isActive = conversation.id === selectedConversationId;

          return (
            <li key={conversation.id}>
              <button
                type="button"
                className={`${styles.itemButton} ${isActive ? styles.itemActive : ''}`}
                aria-pressed={isActive}
                aria-current={isActive}
                onClick={() => {
                  onSelect(conversation.id);
                  if (onDismiss) {
                    onDismiss();
                  }
                }}
              >
                <span className={styles.itemTitle}>
                  {conversation.title}
                  {conversation.unreadCount ? (
                    <span className={styles.badge}>{conversation.unreadCount}</span>
                  ) : null}
                </span>
                <span className={styles.itemPreview}>{conversation.preview}</span>
                <span className={styles.meta}>
                  {conversation.participants.join(', ')}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ChatSidebar;
