import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

export type CardProps = Omit<HTMLAttributes<HTMLElement>, 'className'> & {
  children: ReactNode;
};

type CardSectionProps = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
  children: ReactNode;
};

const CardRoot = forwardRef<HTMLElement, CardProps>(function Card(
  { children, ...rest },
  ref,
) {
  return (
    <section {...rest} ref={ref} className={styles.card}>
      {children}
    </section>
  );
});

CardRoot.displayName = 'Card';

const Header = forwardRef<HTMLDivElement, CardSectionProps>(function CardHeader(
  { children, ...rest },
  ref,
) {
  return (
    <div {...rest} ref={ref} className={styles.header}>
      {children}
    </div>
  );
});

Header.displayName = 'Card.Header';

const Content = forwardRef<HTMLDivElement, CardSectionProps>(function CardContent(
  { children, ...rest },
  ref,
) {
  return (
    <div {...rest} ref={ref} className={styles.content}>
      {children}
    </div>
  );
});

Content.displayName = 'Card.Content';

const Footer = forwardRef<HTMLDivElement, CardSectionProps>(function CardFooter(
  { children, ...rest },
  ref,
) {
  return (
    <div {...rest} ref={ref} className={styles.footer}>
      {children}
    </div>
  );
});

Footer.displayName = 'Card.Footer';

export const Card = Object.assign(CardRoot, {
  Header,
  Content,
  Footer,
});

export type { CardSectionProps };

export default Card;
