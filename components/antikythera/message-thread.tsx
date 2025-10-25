"use client";

import { useEffect, useRef } from "react";
import styles from "./message-thread.module.css";
import type { ChatMessage } from "./types";
import { MessageItem } from "./message-item";

export interface MessageThreadProps {
  messages: ChatMessage[];
  className?: string;
}

export function MessageThread({ messages, className }: MessageThreadProps) {
  const listRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      list.scrollTop = list.scrollHeight;
    }
  }, [messages]);

  const classes = [styles.thread, className].filter(Boolean).join(" ");

  if (messages.length === 0) {
    return (
      <div className={classes}>
        <p className={styles.empty}>Awaiting transmission</p>
      </div>
    );
  }

  return (
    <div className={classes}>
      <ol ref={listRef} className={styles.list}>
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </ol>
    </div>
  );
}
