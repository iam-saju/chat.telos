import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import styles from './Divider.module.css';

export type DividerProps = Omit<HTMLAttributes<HTMLHRElement>, 'className'>;

const Divider = forwardRef<HTMLHRElement, DividerProps>(function Divider(
  { role = 'separator', ...rest },
  ref,
) {
  return <hr {...rest} ref={ref} role={role} className={styles.divider} />;
});

Divider.displayName = 'Divider';

export default Divider;
