"use client";

import { FormEvent } from "react";
import styles from "./message-input.module.css";

export interface MessagePrompt {
  id: string;
  label: string;
  content: string;
  description?: string;
}

export interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  prompts?: MessagePrompt[];
  submitting?: boolean;
}

export function MessageInput({
  value,
  onChange,
  onSubmit,
  prompts = [],
  submitting = false,
}: MessageInputProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }

    onSubmit(trimmed);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <span className={styles.label}>Compose transmission</span>
      <div className={styles.field}>
        <textarea
          aria-label="Message input"
          className={styles.textarea}
          maxLength={1200}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Catalogue your observation or prompt Telos..."
          value={value}
        />
        {prompts.length > 0 ? (
          <div className={styles.prompts} role="list">
            {prompts.map((prompt) => (
              <button
                key={prompt.id}
                type="button"
                className={styles.promptButton}
                onClick={() => onChange(prompt.content)}
              >
                {prompt.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div className={styles.controls}>
        <span className={styles.note}>Shift + Enter for a new line</span>
        <div className={styles.actions}>
          <button
            className={styles.button}
            disabled={submitting || value.trim().length === 0}
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
