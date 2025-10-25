"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: number;
  author: "you" | "telos";
  body: string;
  timestamp: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    author: "telos",
    body: "Welcome to chat.telos. Ask a question and I will help distill the answer.",
    timestamp: "09:41"
  },
  {
    id: 2,
    author: "you",
    body: "Walk me through the latest Antikythera design tokens roadmap.",
    timestamp: "09:42"
  }
];

const authorStyles: Record<ChatMessage["author"], string> = {
  telos: "bg-primary text-primary-foreground",
  you: "bg-muted text-foreground"
};

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!draft.trim()) {
      return;
    }

    const timestamp = new Intl.DateTimeFormat(undefined, {
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date());

    setMessages((current) => {
      const lastId = current[current.length - 1]?.id ?? 0;

      return [
        ...current,
        {
          id: lastId + 1,
          author: "you",
          body: draft.trim(),
          timestamp
        }
      ];
    });

    setDraft("");
  }

  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 md:px-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">chat.telos</p>
            <h1 className="text-lg font-semibold leading-tight md:text-xl">Conversational intelligence for Antikythera teams</h1>
          </div>
          <div className="hidden shrink-0 text-right text-xs text-muted-foreground sm:block">
            <p>Preview build</p>
            <p>Next.js 15 · Tailwind 4</p>
          </div>
        </div>
      </header>

      <section className="flex flex-1 justify-center bg-muted/40">
        <div className="flex w-full max-w-5xl flex-1 flex-col gap-4 px-4 py-6 md:px-6 lg:py-10">
          <div className="flex-1 overflow-hidden rounded-2xl border bg-background/80 p-4 shadow-chat backdrop-blur-sm sm:p-6">
            <ul className="flex h-full flex-col gap-4 overflow-y-auto">
              {messages.map((message) => (
                <li
                  key={message.id}
                  className={cn("flex flex-col gap-2", message.author === "you" && "items-end")}
                >
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium capitalize">{message.author}</span>
                    <span aria-hidden>•</span>
                    <time dateTime={message.timestamp}>{message.timestamp}</time>
                  </div>
                  <div
                    className={cn(
                      "max-w-[min(90%,32rem)] overflow-hidden rounded-2xl px-4 py-3 text-sm shadow-sm transition",
                      authorStyles[message.author]
                    )}
                  >
                    {message.body}
                  </div>
                </li>
              ))}

              <li className="mt-auto flex items-center justify-center text-sm text-muted-foreground">
                <span className="rounded-full border bg-background px-4 py-1 shadow-sm">
                  Telos is ready for your next prompt.
                </span>
              </li>
            </ul>
          </div>

          <footer className="rounded-2xl border bg-background/95 p-4 shadow-chat backdrop-blur-sm sm:p-6">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Textarea
                name="message"
                placeholder="Compose your message…"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                aria-label="Message"
              />
              <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  Telos understands Antikythera concepts and responds instantly in this preview.
                </p>
                <Button type="submit" className="sm:min-w-[140px]">
                  Send message
                </Button>
              </div>
            </form>
          </footer>
        </div>
      </section>
    </main>
  );
}
