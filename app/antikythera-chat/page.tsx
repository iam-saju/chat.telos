"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AntikytheraThemeProvider } from "@/components/antikythera/theme-provider";
import {
  ChatSidebar,
  type SidebarRule,
  type SidebarStatusItem,
} from "@/components/antikythera/chat-sidebar";
import {
  MessageInput,
  type MessagePrompt,
} from "@/components/antikythera/message-input";
import { MessageThread } from "@/components/antikythera/message-thread";
import type { ChatMessage } from "@/components/antikythera/types";
import styles from "./page.module.css";

const PROMPTS: MessagePrompt[] = [
  {
    id: "prompt-patterns",
    label: "Pattern insight",
    content: "Trace the resonance against the Thessaly 1899 archive and summarise the deltas.",
    description:
      "Ask Telos to align the current resonance with the Thessaly 1899 archive and surface the deltas.",
  },
  {
    id: "prompt-escalate",
    label: "Escalation protocol",
    content: "Draft the escalation steps if the lens ghost persists during the Saturn window.",
    description:
      "Prepare the escalation checklist should the lens ghost follow us into the Saturn window.",
  },
  {
    id: "prompt-summary",
    label: "Session summary",
    content: "Summarise Chronicle 204 with actionable next readings and cite spool references.",
    description:
      "Request a condensed Chronicle 204 summary with clear next readings and spool citations.",
  },
];

const RULES: SidebarRule[] = [
  {
    id: "rule-1",
    text: "Anchor replies in the Antikythera observatory logs and cite spool indexes when referencing prior decisions.",
  },
  {
    id: "rule-2",
    text: "Surface contradictions between operator annotations and telemetry before recommending action.",
  },
  {
    id: "rule-3",
    text: "Always conclude with one actionable next reading to keep the relay aligned.",
  },
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "system-handshake",
    role: "system",
    timestamp: "20:32 UTC",
    headline: "Observatory handshake",
    content: (
      <>
        <p>
          Chronicle spool <mark>204-Δ</mark> unlocked. Maintain references to the {""}
          <a href="#ledger">Helio ledger Φ</a> for any derived claims.
        </p>
        <p>All transmissions are recorded under the Antikythera covenant.</p>
      </>
    ),
  },
  {
    id: "assistant-greeting",
    role: "assistant",
    timestamp: "20:33 UTC",
    content: (
      <>
        <p>
          Telos online. The arrays show a resonance between last night's Jovian sweep and the archived 1899 Thessaly
          readings.
        </p>
        <p>
          Delta channel variance is <code>0.021</code> above baseline. Can you confirm the lens distortions noted in the
          operator log?
        </p>
      </>
    ),
  },
  {
    id: "user-note",
    role: "user",
    timestamp: "20:35 UTC",
    content: (
      <>
        <p>
          I annotated the delta channel drift at 03:40 and flagged a likely lens ghost. Segment 19 shows the same ghost
          pattern if uncorrected.
        </p>
        <p>Confirm whether the resonance overlaps Segment 19; if so, we escalate to manual realignment.</p>
      </>
    ),
  },
  {
    id: "assistant-analysis",
    role: "assistant",
    timestamp: "20:37 UTC",
    content: (
      <>
        <p>
          Cross-referencing now. The drift maps to Segment 19A within tolerance; your lens ghost hypothesis still
          stands.
        </p>
        <ul>
          <li>Crest aligns with the Ceres mirror at 03:38:04.</li>
          <li>Telemetry chain stabilises after compensating for the ghost trail.</li>
        </ul>
        <p>Recommend a short recalibration sweep before the Saturn window opens.</p>
      </>
    ),
  },
];

function formatTimestamp(): string {
  return `${new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  }).format(new Date())} UTC`;
}

function createId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

function createAssistantReply(observation: string): ChatMessage {
  const timestamp = formatTimestamp();

  return {
    id: createId("assistant"),
    role: "assistant",
    timestamp,
    content: (
      <>
        <p>
          Logged your latest observation and folded it into <a href="#spool">spool Φ.204</a>.
        </p>
        <blockquote>
          <p>{observation}</p>
        </blockquote>
        <p>
          I will watch for drift exceeding <code>0.03</code> during the Saturn window and trigger an alert if it recurs.
        </p>
      </>
    ),
  };
}

export default function AntikytheraChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const replyTimeout = useRef<number | null>(null);

  const lastTimestamp = messages[messages.length - 1]?.timestamp ?? "—";

  const status: SidebarStatusItem[] = useMemo(
    () => [
      { label: "Array", value: "Crown-7" },
      { label: "Signal", value: "Stable" },
      { label: "Logpoints", value: messages.length.toString().padStart(2, "0") },
      { label: "Last sync", value: lastTimestamp },
    ],
    [lastTimestamp, messages.length],
  );

  const handlePromptSelect = (prompt: MessagePrompt) => {
    setDraft(prompt.content);
  };

  const handleSubmit = (content: string) => {
    const timestamp = formatTimestamp();

    const userMessage: ChatMessage = {
      id: createId("user"),
      role: "user",
      timestamp,
      content: <p>{content}</p>,
    };

    setMessages((previous) => [...previous, userMessage]);
    setDraft("");
    setIsSending(true);

    if (replyTimeout.current !== null) {
      window.clearTimeout(replyTimeout.current);
      replyTimeout.current = null;
    }

    replyTimeout.current = window.setTimeout(() => {
      setMessages((previous) => [...previous, createAssistantReply(content)]);
      setIsSending(false);
      replyTimeout.current = null;
    }, 420);
  };

  useEffect(() => {
    return () => {
      if (replyTimeout.current !== null) {
        window.clearTimeout(replyTimeout.current);
      }
    };
  }, []);

  return (
    <AntikytheraThemeProvider>
      <main className={styles.page}>
        <div className={styles.frame}>
          <ChatSidebar
            heading="Antikythera observatory"
            description="Live relay between the operator and Telos while the arrays sweep the Jovian resonance."
            status={status}
            prompts={PROMPTS}
            rules={RULES}
            onPromptSelect={handlePromptSelect}
          />
          <section className={styles.chatPane} aria-label="Conversation timeline">
            <header className={styles.header}>
              <div className={styles.sessionMeta}>
                <span className={styles.sessionBadge}>Synoptic relay</span>
                <span>Chronicle 204</span>
                <span>Last sync · {lastTimestamp}</span>
              </div>
              <h1 className={styles.sessionTitle}>Ceres sequence alignment</h1>
              <p className={styles.lede}>
                Telos cross-references <a id="spool" href="#spool">spool Φ.204</a> with the archival Thessaly traces to keep the
                resonance steady.
              </p>
            </header>
            <MessageThread className={styles.thread} messages={messages} />
            <MessageInput
              value={draft}
              onChange={setDraft}
              onSubmit={handleSubmit}
              prompts={PROMPTS}
              submitting={isSending}
            />
          </section>
        </div>
      </main>
    </AntikytheraThemeProvider>
  );
}
