import type { ChatMessage } from '../types';
import styles from './MessageThread.module.css';

const timestampFormatter = new Intl.DateTimeFormat(undefined, {
  hour: '2-digit',
  minute: '2-digit',
  month: 'short',
  day: 'numeric',
});

const urlPattern = /(https?:\/\/[^\s]+)/g;

const renderContent = (content: string) => {
  const nodes: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = urlPattern.exec(content)) !== null) {
    const [url] = match;
    const start = match.index;

    if (start > lastIndex) {
      nodes.push(content.slice(lastIndex, start));
    }

    nodes.push(
      <a
        key={`content-link-${key}`}
        href={url}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        {url}
      </a>,
    );

    lastIndex = start + url.length;
    key += 1;
  }

  if (lastIndex < content.length) {
    nodes.push(content.slice(lastIndex));
  }

  if (!nodes.length) {
    return content;
  }

  return nodes.map((node, index) => (
    <span key={`content-node-${index}`}>{node}</span>
  ));
};

export type MessageThreadProps = {
  messages: ChatMessage[];
};

const MessageThread = ({ messages }: MessageThreadProps) => {
  return (
    <section className={styles.thread} aria-label="Message thread">
      {messages.map((message) => {
        const timestamp = timestampFormatter.format(new Date(message.timestamp));

        return (
          <article
            key={message.id}
            className={`${styles.message} ${message.isOwn ? styles.messageOwn : ''}`}
            aria-label={`Message from ${message.author} at ${timestamp}`}
          >
            <header className={styles.header}>
              <span className={styles.author}>{message.author}</span>
              <time className={styles.timestamp} dateTime={message.timestamp}>
                {timestamp}
              </time>
            </header>

            {message.quotedText ? (
              <blockquote className={styles.quote}>{message.quotedText}</blockquote>
            ) : null}

            <p className={styles.content}>{renderContent(message.content)}</p>

            {message.links?.length ? (
              <div className={styles.attachments} aria-label="Attachments">
                {message.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.attachmentLink}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        );
      })}
    </section>
  );
};

export default MessageThread;
