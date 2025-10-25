import { useCallback, useState } from 'react';
import type { FocusEvent } from 'react';

export type FocusHandlers<E extends HTMLElement> = {
  onFocus?: (event: FocusEvent<E>) => void;
  onBlur?: (event: FocusEvent<E>) => void;
};

export const useFocusVisible = <E extends HTMLElement>({
  onFocus,
  onBlur,
}: FocusHandlers<E> = {}) => {
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  const handleFocus = useCallback(
    (event: FocusEvent<E>) => {
      if (typeof event.currentTarget.matches === 'function') {
        setIsFocusVisible(event.currentTarget.matches(':focus-visible'));
      } else {
        setIsFocusVisible(true);
      }

      onFocus?.(event);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<E>) => {
      setIsFocusVisible(false);
      onBlur?.(event);
    },
    [onBlur],
  );

  return {
    isFocusVisible,
    handleFocus,
    handleBlur,
  };
};
