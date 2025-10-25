import type { Breadcrumb, ChatMessage, Conversation } from './types';

type ConversationRecord = Record<string, ChatMessage[]>;

export const breadcrumbs: Breadcrumb[] = [
  { id: 'team', label: 'Design Team' },
  { id: 'project', label: 'Q4 Launch' },
];

export const conversations: Conversation[] = [
  {
    id: 'concepts',
    title: 'Campaign Concepts',
    preview:
      'Let’s revisit the hero narrative and tighten the messaging around the product reveal…',
    participants: ['Amelia', 'Drew', 'Priya'],
    unreadCount: 2,
  },
  {
    id: 'approvals',
    title: 'Stakeholder Approvals',
    preview: 'Latest notes from leadership and updated milestones for the launch window.',
    participants: ['Morgan', 'Amelia', 'Luis'],
  },
  {
    id: 'launch-day',
    title: 'Launch Day Logistics',
    preview: 'Compiling final social assets and the go-live checklist for support.',
    participants: ['Support', 'Marketing'],
  },
];

export const threadByConversation: ConversationRecord = {
  concepts: [
    {
      id: 'm1',
      author: 'Amelia Rivers',
      timestamp: '2023-10-02T09:15:00Z',
      content:
        'Sharing the first pass at the hero narrative. The focus is on the customer journey with a subtle product reveal at the end. Curious if the pacing feels confident enough.',
      links: [
        { label: 'Narrative draft', url: 'https://example.com/narrative-v1' },
      ],
    },
    {
      id: 'm2',
      author: 'Drew Tan',
      timestamp: '2023-10-02T09:32:00Z',
      quotedText:
        'Sharing the first pass at the hero narrative. The focus is on the customer journey with a subtle product reveal at the end.',
      content:
        'This flows well! I added a few beats to amplify the transition into the reveal. The CTA at the end could use a sharper promise—we can workshop that with the lifecycle crew.',
    },
    {
      id: 'm3',
      author: 'Priya Das',
      timestamp: '2023-10-02T10:05:00Z',
      content:
        'Love the pacing. If we tighten the second paragraph we should be ready for stakeholder readout. Looping in Morgan for final sign-off: https://example.com/hero-vision',
      isOwn: true,
    },
  ],
  approvals: [
    {
      id: 'm4',
      author: 'Morgan Lee',
      timestamp: '2023-09-28T16:41:00Z',
      content:
        'Reviewing the approvals deck now. We’ll need explicit notes on the revised metrics narrative. Adding my comments here: https://example.com/approvals',
    },
    {
      id: 'm5',
      author: 'Amelia Rivers',
      timestamp: '2023-09-28T17:05:00Z',
      content:
        'Copy that. I will consolidate data points with Analytics and post an updated deck in the morning.',
      isOwn: true,
    },
  ],
  'launch-day': [
    {
      id: 'm6',
      author: 'Support Crew',
      timestamp: '2023-10-06T11:15:00Z',
      content:
        'We are finalizing the go-live schedule. Please add any blockers before 3pm so we can revise staffing.',
    },
  ],
};

export type { ConversationRecord };
