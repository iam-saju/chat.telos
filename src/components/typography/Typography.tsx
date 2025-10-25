import { ElementType, ForwardedRef, HTMLAttributes, forwardRef } from 'react';
import styles from './Typography.module.css';

type Tone = 'muted' | 'subtle' | 'accent';

type ComposeOptions = {
  className?: string;
  tone?: Tone;
  noMargin?: boolean;
  extra?: Array<string | undefined>;
};

const composeClassName = (variant: keyof typeof styles, options: ComposeOptions) => {
  const { className, tone, noMargin, extra } = options;

  return [
    styles.root,
    styles[variant],
    tone ? styles[tone] : undefined,
    ...(extra ?? []),
    noMargin ? styles.noMargin : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');
};

type HeadingProps<T extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[T],
  'className'
> & {
  className?: string;
  tone?: Tone;
  noMargin?: boolean;
};

type PolymorphicProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  className?: string;
  tone?: Tone;
  noMargin?: boolean;
} & Record<string, unknown>;

type BodyProps = PolymorphicProps & {
  size?: 'default' | 'large' | 'small';
  weight?: 'regular' | 'strong';
};

type LabelProps = PolymorphicProps;

type CaptionProps = PolymorphicProps;

const Display = forwardRef<HTMLHeadingElement, HeadingProps<'h1'>>(
  ({ className, tone, noMargin, ...rest }, ref) => (
    <h1
      ref={ref}
      className={composeClassName('display', { className, tone, noMargin })}
      {...rest}
    />
  ),
);
Display.displayName = 'TypographyDisplay';

const H1 = forwardRef<HTMLHeadingElement, HeadingProps<'h1'>>(
  ({ className, tone, noMargin, ...rest }, ref) => (
    <h1
      ref={ref}
      className={composeClassName('h1', { className, tone, noMargin })}
      {...rest}
    />
  ),
);
H1.displayName = 'TypographyH1';

const H2 = forwardRef<HTMLHeadingElement, HeadingProps<'h2'>>(
  ({ className, tone, noMargin, ...rest }, ref) => (
    <h2
      ref={ref}
      className={composeClassName('h2', { className, tone, noMargin })}
      {...rest}
    />
  ),
);
H2.displayName = 'TypographyH2';

const H3 = forwardRef<HTMLHeadingElement, HeadingProps<'h3'>>(
  ({ className, tone, noMargin, ...rest }, ref) => (
    <h3
      ref={ref}
      className={composeClassName('h3', { className, tone, noMargin })}
      {...rest}
    />
  ),
);
H3.displayName = 'TypographyH3';

const Body = forwardRef<HTMLElement, BodyProps>(
  ({ as, className, tone, noMargin, size = 'default', weight = 'regular', ...rest }, ref) => {
    const Component: ElementType = as ?? 'p';
    const sizeClass =
      size === 'large'
        ? styles.bodyLarge
        : size === 'small'
        ? styles.bodySmall
        : undefined;
    const weightClass = weight === 'strong' ? styles.bodyStrong : undefined;

    return (
      <Component
        ref={ref as ForwardedRef<HTMLElement>}
        className={composeClassName('body', {
          className,
          tone,
          noMargin,
          extra: [sizeClass, weightClass],
        })}
        {...rest}
      />
    );
  },
);
Body.displayName = 'TypographyBody';

const Caption = forwardRef<HTMLElement, CaptionProps>(
  ({ as, className, tone = 'subtle', noMargin, ...rest }, ref) => {
    const Component: ElementType = as ?? 'span';

    return (
      <Component
        ref={ref as ForwardedRef<HTMLElement>}
        className={composeClassName('caption', { className, tone, noMargin })}
        {...rest}
      />
    );
  },
);
Caption.displayName = 'TypographyCaption';

const Label = forwardRef<HTMLElement, LabelProps>(
  ({ as, className, tone = 'muted', noMargin, ...rest }, ref) => {
    const Component: ElementType = as ?? 'span';

    return (
      <Component
        ref={ref as ForwardedRef<HTMLElement>}
        className={composeClassName('label', { className, tone, noMargin })}
        {...rest}
      />
    );
  },
);
Label.displayName = 'TypographyLabel';

const Typography = {
  Display,
  H1,
  H2,
  H3,
  Body,
  Caption,
  Label,
};

export { Display, H1, H2, H3, Body, Caption, Label };
export type { BodyProps, CaptionProps, LabelProps, Tone };
export default Typography;
