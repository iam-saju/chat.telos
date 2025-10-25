import { forwardRef, useId } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import styles from './SectionHeader.module.css';

type HeadingLevel = 'h2' | 'h3' | 'h4';

export type SectionHeaderProps = Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'> & {
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  headingLevel?: HeadingLevel;
};

const SectionHeader = forwardRef<HTMLElement, SectionHeaderProps>(function SectionHeader(
  { title, eyebrow, description, action, headingLevel = 'h2', ...rest },
  ref,
) {
  const headingId = useId();
  const descriptionId = description ? useId() : undefined;
  const HeadingTag = headingLevel;

  return (
    <header
      {...rest}
      ref={ref}
      className={styles.sectionHeader}
      aria-labelledby={headingId}
      aria-describedby={description ? descriptionId : undefined}
    >
      <div className={styles.copy}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <HeadingTag id={headingId} className={styles.title}>
          {title}
        </HeadingTag>
        {description ? (
          <p id={descriptionId} className={styles.description}>
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className={styles.actions}>{action}</div> : null}
    </header>
  );
});

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
