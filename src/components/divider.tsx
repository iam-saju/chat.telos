import * as React from 'react';
import { cn } from '../lib/cn';

type DividerProps = React.ComponentPropsWithoutRef<'hr'>;

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn('my-sm h-px w-full border-0 bg-border', className)}
      {...props}
    />
  )
);
Divider.displayName = 'Divider';
