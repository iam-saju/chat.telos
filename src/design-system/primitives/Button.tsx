import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';
import { useFocusVisible } from './useFocusVisible';

type Variant = 'ghost' | 'subtle' | 'link';

type BaseButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

export type ButtonProps = BaseButtonProps & {
  children: ReactNode;
  variant?: Variant;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, variant = 'ghost', type = 'button', onFocus, onBlur, ...rest },
  ref,
) {
  const { isFocusVisible, handleFocus, handleBlur } = useFocusVisible<HTMLButtonElement>({
    onFocus,
    onBlur,
  });

  const variantClassName = styles[variant] ?? styles.ghost;
  const className = `${styles.button} ${variantClassName}`;

  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      className={className}
      data-variant={variant}
      data-focus-visible={isFocusVisible ? 'true' : undefined}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
