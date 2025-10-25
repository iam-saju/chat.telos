import { forwardRef, isValidElement } from 'react';
import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import Link from './Link';
import styles from './Breadcrumb.module.css';

export type BreadcrumbProps = Omit<HTMLAttributes<HTMLElement>, 'className' | 'children' | 'aria-label'> & {
  label: string;
  children: ReactNode;
};

export type BreadcrumbItemProps = Omit<HTMLAttributes<HTMLLIElement>, 'className' | 'children'> & {
  children: ReactNode;
  href?: string;
  isCurrent?: boolean;
};

const BreadcrumbRoot = forwardRef<HTMLElement, BreadcrumbProps>(function Breadcrumb(
  { label, children, ...rest },
  ref,
) {
  return (
    <nav {...rest} ref={ref} className={styles.breadcrumb} aria-label={label}>
      <ol className={styles.list}>{children}</ol>
    </nav>
  );
});

const Item = forwardRef<HTMLLIElement, BreadcrumbItemProps>(function BreadcrumbItem(
  { children, href, isCurrent = false, ...rest },
  ref,
) {
  const ariaCurrent = isCurrent ? 'page' : undefined;
  const content = href && !isCurrent ? (
    <Link href={href} showExternalIcon={false}>
      {children}
    </Link>
  ) : (
    <span className={styles.current} aria-current={ariaCurrent}>
      {children}
    </span>
  );

  return (
    <li {...rest} ref={ref} className={styles.item}>
      {content}
    </li>
  );
});

const isBreadcrumbItem = (child: ReactNode): child is ReactElement => {
  return isValidElement(child) && child.type === Item;
};

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item,
  isBreadcrumbItem,
});

export default Breadcrumb;
