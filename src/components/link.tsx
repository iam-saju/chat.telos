import * as React from 'react';
import { cn } from '../lib/cn';

type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
  external?: boolean;
};

const ExternalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M12.5 3H17v4.5M9 11l8-8"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 11v5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={0.9}
    />
  </svg>
);

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, external, target, rel, ...props }, ref) => {
    const isExternal = external ?? target === '_blank';
    const derivedRel = isExternal
      ? [rel, 'noopener', 'noreferrer'].filter(Boolean).join(' ')
      : rel;

    return (
      <a
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1 font-medium text-accent underline-offset-4',
          'transition-colors duration-base ease-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
          'hover:text-accent-muted hover:underline',
          'disabled:pointer-events-none disabled:opacity-50',
          className
        )}
        target={isExternal ? target ?? '_blank' : target}
        rel={derivedRel}
        {...props}
        data-external={isExternal ? 'true' : undefined}
      >
        <span>{children}</span>
        {isExternal ? (
          <ExternalIcon className="h-4 w-4 translate-y-[0.5px] text-current" />
        ) : null}
      </a>
    );
  }
);
Link.displayName = 'Link';
