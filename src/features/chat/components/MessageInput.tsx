'use client';

import { FormEvent, KeyboardEvent, useCallback, useState } from 'react';
import Typography from '../../../components/typography';
import styles from './MessageInput.module.css';

export type MessageInputProps = {
  onSubmit: (message: string) => void;
  placeholder?: string;
};

const MessageInput = ({ onSubmit, placeholder = 'Write a response…' }: MessageInputProps) => {
  const [value, setValue] = useState('');

  const handleSubmit = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }

    onSubmit(trimmed);
    setValue('');
  }, [onSubmit, value]);

  const handleFormSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleSubmit();
    },
    [handleSubmit],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleFormSubmit} aria-label="Send a message">
        <fieldset className={styles.fieldset}>
          <label htmlFor="chat-input" className="sr-only">
            Message input
          </label>
          <textarea
            id="chat-input"
            name="message"
            className={styles.textarea}
            placeholder={placeholder}
            value={value}
            rows={3}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Type your message"
          />
        </fieldset>

        <div className={styles.controls}>
          <div className={styles.actionGroup}>
            <button type="button" className={styles.buttonGhost} aria-label="Add attachment">
              Attach
            </button>
            <button type="button" className={styles.buttonGhost} aria-label="Insert emoji">
              Emoji
            </button>
          </div>

          <div className={styles.actionGroup}>
            <Typography.Caption
              as="span"
              tone="subtle"
              noMargin
              className={styles.hint}
            >
              Press Enter to send · Shift+Enter for newline
            </Typography.Caption>
            <button type="submit" className={styles.primaryButton} disabled={!value.trim()}>
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
