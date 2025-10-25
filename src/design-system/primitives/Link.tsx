import { forwardRef, Fragment } from 'react';
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';
import styles from './Link.module.css';
import { useFocusVisible } from './useFocusVisible';

const PROTOCOL_REGEX = /^[a-z][a-z0-9+.-]*:/i;

type BaseAnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href'>;

export type LinkProps = BaseAnchorProps & {
  href: string;
  children: ReactNode;
  disabled?: boolean;
  showExternalIcon?: boolean;
  isExternal?: boolean;
};

const combineRel = (rel: string | undefined, additions: string[]) => {
  if (!additions.length) {
    return rel;
  }

  const existing = new Set((rel ?? '').split(' ').filter(Boolean));
  additions.forEach((item) => existing.add(item));
  const value = Array.from(existing).join(' ');
  return value || undefined;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    href,
    children,
    disabled = false,
    showExternalIcon = true,
    isExternal: isExternalOverride,
    rel,
    target,
    onFocus,
    onBlur,
    onClick,
    ...rest
  },
  ref,
) {
  const {
    ['aria-disabled']: ariaDisabledProp,
    tabIndex: providedTabIndex,
    role: providedRole,
    ...otherProps
  } = rest as typeof rest & {
    ['aria-disabled']?: string | boolean;
    tabIndex?: number;
    role?: string;
  };

  const isExternal =
    typeof isExternalOverride === 'boolean'
      ? isExternalOverride
      : PROTOCOL_REGEX.test(href);

  const computedTarget = isExternal ? target ?? '_blank' : target;
  const computedRel = isExternal
    ? combineRel(rel, ['noopener', 'noreferrer'])
    : rel;

  const { isFocusVisible, handleFocus, handleBlur } = useFocusVisible<HTMLAnchorElement>({
    onFocus,
    onBlur,
  });

  const ariaDisabled =
    disabled ||
    ariaDisabledProp === true ||
    ariaDisabledProp === 'true';

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (ariaDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  };

  const tabIndex = ariaDisabled ? -1 : providedTabIndex;
  const role = ariaDisabled ? providedRole ?? 'link' : providedRole;

  return (
    <a
      {...otherProps}
      ref={ref}
      href={href}
      className={styles.link}
      data-focus-visible={isFocusVisible ? 'true' : undefined}
      data-disabled={ariaDisabled ? 'true' : undefined}
      aria-disabled={ariaDisabled ? 'true' : ariaDisabledProp ?? undefined}
      target={computedTarget}
      rel={computedRel}
      tabIndex={tabIndex}
      role={role}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
    >
      <span className={styles.label}>{children}</span>
      {isExternal && showExternalIcon ? (
        <Fragment>
          <svg
            aria-hidden="true"
            className={styles.externalIcon}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M14.75 2H9.5a.75.75 0 0 0 0 1.5h3.69L8.22 8.47a.75.75 0 1 0 1.06 1.06L14.25 4.56v3.69a.75.75 0 0 0 1.5 0V3.75A1.75 1.75 0 0 0 14.75 2z" />
            <path d="M6.25 4A2.25 2.25 0 0 0 4 6.25v7.5A2.25 2.25 0 0 0 6.25 16h7.5A2.25 2.25 0 0 0 16 13.75v-2.5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 0 0-1.5h-2.5z" />
          </svg>
          <span className="sr-only">Opens in a new tab</span>
        </Fragment>
      ) : null}
    </a>
  );
});

export default Link;
