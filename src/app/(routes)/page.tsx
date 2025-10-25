import Link from "next/link";

const navLinks = [
  { href: "#tokens", label: "Tokens" },
  { href: "#foundations", label: "Foundations" },
  { href: "#roadmap", label: "Roadmap" }
];

const tokenHighlights = [
  {
    title: "Color system",
    body: "Soft neutrals pair with a muted Antikythera blue accent scale for contrast that feels calm yet intentional."
  },
  {
    title: "Spacing scale",
    body: "An 8px rhythm keeps surfaces airy while making room for dense conversational UI."
  },
  {
    title: "Motion guidance",
    body: "Transitions are deliberately subtle and respect prefers-reduced-motion for accessibility."
  }
];

const foundationCards = [
  {
    title: "Instrument Serif",
    body: "Headlines lean into editorial warmth while remaining sharp enough for product storytelling."
  },
  {
    title: "Inter",
    body: "A trusted, workhorse sans-serif ensures system UI stays legible across dense layouts."
  },
  {
    title: "Responsive container",
    body: "Layouts hug a generous 1360px max width with adaptive gutters for spacious composition."
  }
];

export default function HomePage() {
  return (
    <main id="main-content" className="isolate">
      <section className="border-b border-divider bg-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-container flex-col gap-lg px-gutter py-2xl">
          <div className="flex flex-wrap items-center gap-sm text-sm text-text-secondary">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-muted px-md py-xs font-medium text-text-primary shadow-soft">
              <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden />
              Next.js 15 · Tailwind 4 · pnpm
            </span>
            <span>Antikythera preview scaffold</span>
          </div>

          <div className="space-y-sm">
            <h1 className="max-w-4xl text-balance">A thoughtful home for the future of chat Telos</h1>
            <p className="max-w-2xl text-lg text-text-secondary">
              Ship conversational primitives faster with an App Router foundation, Antikythera-flavored design tokens, and typography tuned for clarity.
            </p>
          </div>

          <nav aria-label="On-page sections" className="mt-md">
            <ul className="flex flex-wrap gap-sm text-sm text-text-secondary">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-transparent px-md py-xs transition-colors duration-short ease-standard hover:border-link hover:text-link"
                  >
                    <span aria-hidden>↘</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section id="tokens" className="bg-background">
        <div className="mx-auto max-w-container px-gutter py-2xl">
          <header className="space-y-xs">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary">Design tokens</p>
            <h2 className="text-balance">Opinionated, Antikythera-inspired foundations</h2>
            <p className="max-w-2xl text-text-secondary">
              Colors, spacing, typography, and motion are expressed as CSS variables and surfaced through Tailwind for predictable orchestration across light and dark modes.
            </p>
          </header>

          <div className="mt-xl grid gap-lg md:grid-cols-3">
            {tokenHighlights.map((highlight) => (
              <article
                key={highlight.title}
                className="flex h-full flex-col justify-between gap-sm rounded-lg border border-divider bg-surface/80 p-lg shadow-soft transition-colors duration-medium ease-standard hover:border-link/60"
              >
                <h3 className="text-xl">{highlight.title}</h3>
                <p className="text-text-secondary">{highlight.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="foundations" className="bg-surface">
        <div className="mx-auto max-w-container px-gutter py-2xl">
          <header className="space-y-xs">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary">Typography & layout</p>
            <h2 className="text-balance">Fonts and structure that celebrate the narrative</h2>
          </header>

          <div className="mt-xl grid gap-lg md:grid-cols-3">
            {foundationCards.map((card) => (
              <article key={card.title} className="flex h-full flex-col gap-sm rounded-lg border border-divider bg-background/80 p-lg">
                <h3 className="text-xl">{card.title}</h3>
                <p className="text-text-secondary">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="border-t border-divider bg-background">
        <div className="mx-auto max-w-container px-gutter py-2xl">
          <div className="grid gap-lg md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-start">
            <div className="space-y-sm">
              <h2 className="text-balance">Ready for the chat UI that follows</h2>
              <p className="text-text-secondary">
                The scaffold keeps motion gentle, introduces focus rings that meet contrast requirements, and embraces the Antikythera palette for high readability. Future work can lean on these tokens to bring the chat experience to life.
              </p>
            </div>
            <div className="flex flex-col gap-sm rounded-lg border border-divider bg-surface-muted/60 p-lg text-sm text-text-secondary">
              <p className="font-semibold uppercase tracking-[0.2em] text-text-primary">Looking ahead</p>
              <ul className="list-disc space-y-xs pl-lg">
                <li>Typography primitives for conversational roles</li>
                <li>Message surface patterns and states</li>
                <li>Dark mode gestures and temporal cues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
