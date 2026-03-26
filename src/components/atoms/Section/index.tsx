import 'server-only';

import clsx from 'clsx/lite';
import type { LegacyRef } from 'react';

interface SectionProps {
  ariaLabel?: string;
  children: Readonly<React.ReactNode>;
  className?: string;
  id?: string;
  ref?: LegacyRef<HTMLElement>;
}

function Section({
  ariaLabel,
  children,
  className,
  id,
  ref,
}: SectionProps): React.ReactElement {
  return (
    <section
      aria-label={ariaLabel}
      className={clsx('flex flex-col gap-4', className)}
      id={id}
      ref={ref}
    >
      {children}
    </section>
  );
}

export default Section;
