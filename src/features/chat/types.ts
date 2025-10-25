export type ChatLink = {
  label: string;
  url: string;
};

export type ChatMessage = {
  id: string;
  author: string;
  avatar?: string;
  timestamp: string;
  content: string;
  quotedText?: string;
  links?: ChatLink[];
  isOwn?: boolean;
};

export type Conversation = {
  id: string;
  title: string;
  preview: string;
  participants: string[];
  unreadCount?: number;
};

export type Breadcrumb = {
  id: string;
  label: string;
};
