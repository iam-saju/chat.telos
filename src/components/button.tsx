import * as React from 'react';
import { cn } from '../lib/cn';

type ButtonVariant = 'ghost' | 'subtle' | 'link';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  loading?: boolean;
};

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-base ease-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-40 disabled:pointer-events-none';

const variants: Record<ButtonVariant, string> = {
  ghost:
    'px-4 py-2 text-text bg-transparent hover:bg-surface-muted active:bg-surface-muted/70',
  subtle:
    'px-5 py-2.5 text-text bg-surface-muted hover:bg-surface active:bg-surface/80 border border-border shadow-subtle',
  link: 'px-0 py-0 text-accent underline-offset-4 hover:underline hover:text-accent-muted',
};

const loaderStyles =
  'h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'ghost', loading = false, disabled, ...props }, ref) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        disabled={isDisabled}
        data-variant={variant}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? <span className={loaderStyles} aria-hidden="true" /> : null}
        <span className={cn(loading && 'opacity-80')}>{children}</span>
      </button>
    );
  }
);
Button.displayName = 'Button';
