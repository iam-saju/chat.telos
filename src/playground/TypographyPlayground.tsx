import Typography from '../components/typography';
import styles from './TypographyPlayground.module.css';

const sampleParagraph =
  'The quick brown fox jumps over the lazy dog, illustrating every glyph in the alphabet. Pair the serif display with generous spacing to highlight important narratives.';

const sampleSecondary =
  'Supportive body copy keeps information scannable while maintaining a balanced rhythm on the page.';

const TypographyPlayground = () => {
  const goBackToChat = () => {
    window.location.hash = '';
  };

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Typography.Label tone="accent" noMargin>
          Typography system
        </Typography.Label>
        <Typography.Display>
          Type ramp playground
        </Typography.Display>
        <Typography.Body size="large" className={styles.sampleBody} noMargin>
          Explore the semantic typography primitives and responsive scale used across the
          conversation experience. Append <code>#typography</code> to the application URL to open
          this view, then clear the hash or switch to <code>#chat</code> to return to the main
          interface.
        </Typography.Body>
        <button type="button" className={styles.backButton} onClick={goBackToChat}>
          Return to chat
        </button>
      </header>

      <section className={styles.section}>
        <Typography.H2 noMargin>Display &amp; headings</Typography.H2>
        <div className={styles.grid}>
          <div className={styles.sampleCard}>
            <div className={styles.stack}>
              <Typography.Label tone="subtle" noMargin>
                Display
              </Typography.Label>
              <Typography.Display noMargin>
                Instrument Serif Display
              </Typography.Display>
              <Typography.Caption tone="subtle" noMargin>
                Hero or promotional headlines. Tight letter-spacing and low contrast weight provide
                character while staying legible.
              </Typography.Caption>
            </div>
          </div>

          <div className={styles.sampleCard}>
            <div className={styles.stack}>
              <Typography.Label tone="subtle" noMargin>
                Heading / H1
              </Typography.Label>
              <Typography.H1 noMargin>
                Conversation overview
              </Typography.H1>
              <Typography.Caption tone="subtle" noMargin>
                Primary page titles and key surfaces. Responsive clamp keeps text balanced across
                breakpoints.
              </Typography.Caption>
            </div>
          </div>

          <div className={styles.sampleCard}>
            <div className={styles.stack}>
              <Typography.Label tone="subtle" noMargin>
                Heading / H2
              </Typography.Label>
              <Typography.H2 noMargin>
                Section headline
              </Typography.H2>
              <Typography.Caption tone="subtle" noMargin>
                Secondary sections or card titles. Shares the same serif stack with a slightly
                looser rhythm.
              </Typography.Caption>
            </div>
          </div>

          <div className={styles.sampleCard}>
            <div className={styles.stack}>
              <Typography.Label tone="subtle" noMargin>
                Heading / H3
              </Typography.Label>
              <Typography.H3 noMargin>
                Subsection title
              </Typography.H3>
              <Typography.Caption tone="subtle" noMargin>
                Use inside cards or compact layouts where hierarchy is still required.
              </Typography.Caption>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <Typography.H2 noMargin>Body copy</Typography.H2>
        <div className={styles.grid}>
          <div className={styles.sampleCard}>
            <div className={styles.stack}>
              <Typography.Label tone="subtle" noMargin>
                Body / Default
              </Typography.Label>
              <Typography.Body className={styles.sampleBody} noMargin>
                {sampleParagraph}
              </Typography.Body>
            </div>
          </div>

          <div className={styles.sampleCard}>
            <div className={styles.stack}>
              <Typography.Label tone="subtle" noMargin>
                Body / Large
              </Typography.Label>
              <Typography.Body size="large" className={styles.sampleBody} noMargin>
                {sampleSecondary}
              </Typography.Body>
            </div>
          </div>

          <div className={styles.sampleCard}>
            <div className={styles.stack}>
              <Typography.Label tone="subtle" noMargin>
                Body / Compact
              </Typography.Label>
              <Typography.Body size="small" tone="muted" className={styles.sampleBody} noMargin>
                Compact body style is useful for metadata or supporting descriptions in dense
                layouts.
              </Typography.Body>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <Typography.H2 noMargin>Supporting styles</Typography.H2>
        <div className={styles.grid}>
          <div className={styles.sampleCard}>
            <div className={styles.stack}>
              <Typography.Label tone="subtle" noMargin>
                Label
              </Typography.Label>
              <Typography.Label noMargin>Active insights</Typography.Label>
              <Typography.Caption tone="subtle" noMargin>
                Uppercase labels pair with surface or section dividers to introduce grouped
                content.
              </Typography.Caption>
            </div>
          </div>

          <div className={styles.sampleCard}>
            <div className={styles.stack}>
              <Typography.Label tone="subtle" noMargin>
                Caption
              </Typography.Label>
              <Typography.Caption noMargin>
                Captions and helper text keep supporting instructions clear and unobtrusive.
              </Typography.Caption>
              <Typography.Caption tone="accent" noMargin>
                Example · 12px / 18px
              </Typography.Caption>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TypographyPlayground;
