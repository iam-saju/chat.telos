import styles from "./message-item.module.css";
import type { ChatMessage } from "./types";

const ROLE_LABEL: Record<ChatMessage["role"], string> = {
  user: "Operator",
  assistant: "Telos",
  system: "System",
};

export interface MessageItemProps {
  message: ChatMessage;
}

export function MessageItem({ message }: MessageItemProps) {
  const roleClass =
    message.role === "assistant"
      ? styles.roleAssistant
      : message.role === "system"
        ? styles.roleSystem
        : styles.roleUser;

  const classes = [styles.message, roleClass].filter(Boolean).join(" ");

  return (
    <li className={classes} aria-label={`${ROLE_LABEL[message.role]} message`}>
      {message.headline ? (
        <div className={styles.headline}>{message.headline}</div>
      ) : null}
      <div className={styles.meta}>
        <span>{ROLE_LABEL[message.role]}</span>
        <span>{message.timestamp}</span>
      </div>
      <div className={styles.body}>{message.content}</div>
    </li>
  );
}
