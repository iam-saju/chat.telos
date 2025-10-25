'use client';

import Typography from '../../../components/typography';
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
    <Typography.Caption as="span" key={crumb.id} tone="subtle" noMargin>
      {crumb.label}
      {index < breadcrumbs.length - 1 ? (
        <span aria-hidden="true" className={styles.breadcrumbSeparator}>
          /
        </span>
      ) : null}
    </Typography.Caption>
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
          <Typography.H2 className={styles.title} noMargin>
            Conversations
          </Typography.H2>
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
                <Typography.Body
                  as="span"
                  weight="strong"
                  noMargin
                  className={styles.itemTitle}
                >
                  {conversation.title}
                  {conversation.unreadCount ? (
                    <span className={styles.badge}>{conversation.unreadCount}</span>
                  ) : null}
                </Typography.Body>
                <Typography.Body
                  as="span"
                  size="small"
                  tone="muted"
                  noMargin
                  className={styles.itemPreview}
                >
                  {conversation.preview}
                </Typography.Body>
                <Typography.Caption
                  as="span"
                  tone="subtle"
                  noMargin
                  className={styles.meta}
                >
                  {conversation.participants.join(', ')}
                </Typography.Caption>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ChatSidebar;
