'use client';

import { memo, useEffect, useRef } from 'react';

interface HeaderNavItemProps {
  sectionName: string;
}

const observerOptions: IntersectionObserverInit = {
  rootMargin: '-10% 0px -45% 0px',
  threshold: [0, 0.2, 0.35, 0.5, 0.7, 1],
};

function HeaderNavItem({
  sectionName,
}: HeaderNavItemProps): React.ReactElement {
  const navItemRef = useRef<HTMLAnchorElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect((): (() => void) | void => {
    const sectionElement = document.getElementById(sectionName);

    if (!sectionElement || !navItemRef.current || !divRef.current) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry): void => {
          const isIntersecting =
            entry.isIntersecting && entry.intersectionRatio >= 0.35;

          if (!isIntersecting) {
            navItemRef.current?.classList.remove('text-primary-100');
            navItemRef.current?.classList.add('text-primary-80');
            divRef.current?.classList.add('w-8');
            divRef.current?.classList.remove('w-16');

            return;
          }
          navItemRef.current?.classList.add('text-primary-100');
          navItemRef.current?.classList.remove('text-primary-80');
          divRef.current?.classList.remove('w-8');
          divRef.current?.classList.add('w-16');
        });
      },
      observerOptions,
    );

    observer.observe(sectionElement);

    return (): void => observer.disconnect();
  }, [sectionName]);

  return (
    <a
      className="group text-primary-80 hover:text-primary-100 flex w-fit flex-row items-center gap-4 transition-colors duration-300"
      href={`#${sectionName}`}
      ref={navItemRef}
    >
      <div
        className="bg-primary-80 group-hover:bg-primary-100 h-px w-8 transition-all duration-300 ease-in-out group-hover:w-16"
        ref={divRef}
      />
      {sectionName}
    </a>
  );
}

const HeaderNavItemMemo = memo(HeaderNavItem);

export default HeaderNavItemMemo;
