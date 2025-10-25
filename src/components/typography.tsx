import * as React from 'react';
import { cn } from '../lib/cn';

type HeadingProps = React.ComponentPropsWithoutRef<'h1'>;

type TextProps = React.ComponentPropsWithoutRef<'p'>;

type SpanTextProps = React.ComponentPropsWithoutRef<'span'>;

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface';

export const H1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        'font-serif text-[3rem] font-bold leading-[1.2] tracking-[-0.04em] mt-0 mb-0',
        'sm:text-[3.25rem] md:text-[3.5rem]',
        focusRing,
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
);
H1.displayName = 'H1';

export const H2 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        'font-serif text-[2rem] font-semibold leading-[1.3] tracking-[-0.02em] mt-0 mb-0',
        'sm:text-[2.25rem] md:text-[2.5rem]',
        focusRing,
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
);
H2.displayName = 'H2';

export const H3 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'font-serif text-[1.5rem] font-semibold leading-[1.4] tracking-[-0.01em] mt-0 mb-0',
        'sm:text-[1.65rem] md:text-[1.8rem]',
        focusRing,
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
);
H3.displayName = 'H3';

export const Body = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'font-sans text-base font-normal leading-[1.6] tracking-[0.005em] mt-0 mb-0',
        focusRing,
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
);
Body.displayName = 'Body';

export const Caption = React.forwardRef<HTMLSpanElement, SpanTextProps>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'font-sans text-sm font-normal leading-[1.5] tracking-[0.03em] text-text-muted',
        focusRing,
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
);
Caption.displayName = 'Caption';

export const Label = React.forwardRef<HTMLSpanElement, SpanTextProps>(
  ({ className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'font-sans text-xs font-medium uppercase leading-[1.4] tracking-[0.08em] text-text-muted',
        focusRing,
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
);
Label.displayName = 'Label';
