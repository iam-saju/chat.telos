import * as React from 'react';
import {
  Body,
  Caption,
  H1,
  H2,
  H3,
  Label,
} from '../components/typography';
import { Link } from '../components/link';
import { Button } from '../components/button';
import { Card, CardBadge, CardMeta } from '../components/card';
import { Divider } from '../components/divider';

const sections = [
  {
    label: 'Typography scale',
    description:
      'Instrument Serif powers headlines while Inter provides crisp reading for UI copy. Sizes adapt fluidly across breakpoints.',
  },
  {
    label: 'Interactive links',
    description:
      'Muted blues with underline-on-hover keep actions discoverable. External links surface an icon cue and safe target attributes.',
  },
  {
    label: 'Buttons',
    description:
      'Ghost, subtle, and link variants cover primary use-cases with accessible focus states, loading affordances, and muted motion.',
  },
  {
    label: 'Surface primitives',
    description:
      'Cards and dividers rely on token-driven spacing, radii, and shadows for maintainable theming across light and dark modes.',
  },
];

const SectionMeta: React.FC<{ index: number; title: string; description: string }> = ({
  index,
  title,
  description,
}) => (
  <div className="space-y-xs">
    <Label className="text-text-muted">{`0${index + 1}`}</Label>
    <H3 className="text-text">{title}</H3>
    <Body className="text-text-muted">{description}</Body>
  </div>
);

const TokensPage: React.FC = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-text transition-colors duration-300">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-md pt-xl">
        <div className="space-y-xs">
          <Caption className="text-text-muted">Antikythera primitives</Caption>
          <H1 className="text-text">Typography & interface tokens</H1>
          <Body className="max-w-2xl text-text-muted">
            Responsive typography, purposeful spacing, and subtle motion choreographed through Tailwind-aligned tokens.
          </Body>
        </div>
        <Button
          variant="subtle"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'light' ? 'Enable dark mode' : 'Enable light mode'}
        </Button>
      </header>

      <main className="mx-auto mt-xl flex w-full max-w-5xl flex-col gap-xl px-md pb-2xl">
        <section id="typography" className="grid gap-lg md:grid-cols-[240px_1fr]">
          <SectionMeta index={0} title={sections[0].label} description={sections[0].description} />
          <div className="space-y-lg">
            <div>
              <Label>H1</Label>
              <H1 className="mt-xs">Astronomical craftsmanship</H1>
              <Body className="mt-xs max-w-2xl text-text-muted">
                At 48px scaling to 56px on large screens, Instrument Serif keeps display copy lyrical without sacrificing clarity.
              </Body>
            </div>
            <Divider />
            <div>
              <Label>H2</Label>
              <H2 className="mt-xs">Navigating complex systems</H2>
              <Body className="mt-xs max-w-2xl text-text-muted">
                Supporting hierarchy with a 32px base, H2 balances presence and approachability for section headlines.
              </Body>
            </div>
            <Divider />
            <div>
              <Label>H3</Label>
              <H3 className="mt-xs">Mission architecture</H3>
              <Body className="mt-xs max-w-2xl text-text-muted">
                The tertiary heading grounds subsections at 24px, carrying a 1.4 line-height for dense descriptions.
              </Body>
            </div>
            <Divider />
            <div className="space-y-xs">
              <Label>Body</Label>
              <Body>
                Body copy leans on Inter 16px regular with 1.6 line-height for comfortable reading across form factors.
              </Body>
            </div>
            <div className="space-y-1">
              <Label>Caption</Label>
              <Caption>Microcopy, helper text, and timestamp details sit at 14px weight 400.</Caption>
            </div>
            <div className="space-y-1">
              <Label>Label</Label>
              <Label className="text-text">Metadata label text, 12px with medium weight and tightened tracking.</Label>
            </div>
          </div>
        </section>

        <Divider />

        <section className="grid gap-lg md:grid-cols-[240px_1fr]">
          <SectionMeta index={1} title={sections[1].label} description={sections[1].description} />
          <div className="space-y-sm">
            <Body>
              Inline links respect the text rhythm while revealing an underline and richer blue hue on hover.
            </Body>
            <div className="flex flex-wrap items-center gap-sm">
              <Link href="#typography">Internal primitive link</Link>
              <Link href="https://example.com" external>
                External knowledge base
              </Link>
            </div>
          </div>
        </section>

        <Divider />

        <section className="grid gap-lg md:grid-cols-[240px_1fr]">
          <SectionMeta index={2} title={sections[2].label} description={sections[2].description} />
          <div className="space-y-md">
            <div className="flex flex-wrap items-center gap-sm">
              <Button variant="ghost">Ghost button</Button>
              <Button variant="subtle">Subtle button</Button>
              <Button variant="link">Link button</Button>
            </div>
            <div className="flex flex-wrap items-center gap-sm">
              <Button variant="ghost" disabled>
                Disabled state
              </Button>
              <Button variant="subtle" loading>
                Resolving orbit
              </Button>
              <Button variant="link" loading>
                Loading link
              </Button>
            </div>
          </div>
        </section>

        <Divider />

        <section className="grid gap-lg md:grid-cols-[240px_1fr]">
          <SectionMeta index={3} title={sections[3].label} description={sections[3].description} />
          <div className="grid gap-lg md:grid-cols-2">
            <Card
              id="card-primary"
              heading="Mission briefing"
              description="High-level context with optional actions and metadata."
              action={<Button variant="ghost">View board</Button>}
            >
              <CardMeta>
                <CardBadge>Launch window</CardBadge>
                <Caption>June 18 · 06:32 UTC</Caption>
              </CardMeta>
              <Body className="text-text-muted">
                Align cross-functional teams on mission objectives, dependencies, and critical path milestones.
              </Body>
              <Divider className="my-sm" />
              <Link href="https://nasa.gov" external>
                Explore launch readiness guide
              </Link>
            </Card>
            <Card id="card-secondary" heading="Research backlog">
              <Body className="text-text-muted">
                Track experiment proposals and observations without overwhelming contributors with dense UI.
              </Body>
              <div className="flex flex-wrap items-center gap-sm">
                <Button variant="subtle">Add entry</Button>
                <Button variant="ghost">Share</Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TokensPage;
