import * as React from 'react';
import { cn } from '../lib/cn';
import { Body, Caption, H3 } from './typography';

type CardProps = React.ComponentPropsWithoutRef<'div'> & {
  heading?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, heading, description, action, ...rest }, ref) => {
    const { id, ...divProps } = rest;
    const headingId = heading && id ? `${id}-heading` : undefined;
    const descriptionId = description && id ? `${id}-description` : undefined;

    return (
      <div
        ref={ref}
        id={id}
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        className={cn(
          'group rounded-lg border border-border bg-surface shadow-card transition-shadow duration-base ease-soft hover:shadow-card-emphasis',
          'focus-within:ring-2 focus-within:ring-focus focus-within:ring-offset-2 focus-within:ring-offset-surface',
          'p-lg md:p-xl',
          className
        )}
        {...divProps}
      >
        {(heading || description || action) && (
          <div className="mb-md flex flex-col gap-sm md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              {heading ? (
                <H3 className="m-0 text-text" id={headingId}>
                  {heading}
                </H3>
              ) : null}
              {description ? (
                <Body className="mt-0 mb-0 text-text-muted" id={descriptionId}>
                  {description}
                </Body>
              ) : null}
            </div>
            {action ? <div className="mt-sm md:mt-0">{action}</div> : null}
          </div>
        )}
        <div className="space-y-sm">
          {children}
        </div>
      </div>
    );
  }
);
Card.displayName = 'Card';

export const CardMeta: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn('flex items-center gap-xs text-text-muted', className)} {...props} />
);

export const CardBadge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className, ...props }) => (
  <Caption
    className={cn(
      'rounded-full bg-surface-muted px-2 py-0.5 text-[color:var(--color-text)]',
      className
    )}
    {...props}
  />
);
