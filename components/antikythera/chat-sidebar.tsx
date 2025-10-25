import styles from "./chat-sidebar.module.css";
import type { MessagePrompt } from "./message-input";

export interface SidebarStatusItem {
  label: string;
  value: string;
}

export interface SidebarRule {
  id: string;
  text: string;
}

export interface ChatSidebarProps {
  heading: string;
  description: string;
  status: SidebarStatusItem[];
  prompts: Array<MessagePrompt & { description?: string }>;
  rules: SidebarRule[];
  onPromptSelect: (prompt: MessagePrompt) => void;
  className?: string;
}

export function ChatSidebar({
  heading,
  description,
  status,
  prompts,
  rules,
  onPromptSelect,
  className,
}: ChatSidebarProps) {
  const classes = [styles.sidebar, className].filter(Boolean).join(" ");

  return (
    <aside className={classes} aria-label="Session context">
      <div className={styles.header}>
        <h2 className={styles.title}>{heading}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.status} role="list">
        {status.map((item) => (
          <div key={item.label} className={styles.statusRow} role="listitem">
            <span>{item.label}</span>
            <span className={styles.statusValue}>{item.value}</span>
          </div>
        ))}
      </div>

      {prompts.length > 0 ? <hr /> : null}

      {prompts.length > 0 ? (
        <div className={styles.prompts}>
          {prompts.map((prompt) => (
            <button
              key={prompt.id}
              type="button"
              className={styles.promptButton}
              onClick={() => onPromptSelect(prompt)}
            >
              <span className={styles.promptTitle}>{prompt.label}</span>
              <span className={styles.promptCopy}>{prompt.description ?? prompt.content}</span>
            </button>
          ))}
        </div>
      ) : null}

      {rules.length > 0 ? <hr /> : null}

      {rules.length > 0 ? (
        <div className={styles.rules}>
          {rules.map((rule) => (
            <p key={rule.id} className={styles.rule}>
              {rule.text}
            </p>
          ))}
        </div>
      ) : null}

      <p className={styles.footer}>Antikythera initiative · ChatTelos</p>
    </aside>
  );
}
