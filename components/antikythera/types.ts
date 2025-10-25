import { ReactNode } from "react";

export type ChatRole = "user" | "assistant" | "system";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: ReactNode;
  timestamp: string;
  headline?: string;
}
