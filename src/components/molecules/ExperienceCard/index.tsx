'use client';

import clsx from 'clsx/lite';
import { useEffect, useRef } from 'react';

import TechTag from '../TechTag';

interface ExperienceCardProps {
  companyName: string;
  description: string;
  period: string;
  position: string;
  stack: string[];
  url: string;
}

function ExperienceCard({
  companyName,
  description,
  period,
  position,
  stack,
  url,
}: ExperienceCardProps): React.ReactElement {
  const cardRef = useRef<HTMLElement>(null);

  useEffect((): (() => void) | void => {
    const cardElement = cardRef.current;

    if (!cardElement) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        const entry = entries[0];

        if (!entry) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.65) {
          cardElement.dataset.active = 'true';

          return;
        }

        delete cardElement.dataset.active;
      },
      {
        rootMargin: '-10% 0px -15% 0px',
        threshold: [0, 0.2, 0.4, 0.55, 0.7, 1],
      },
    );

    observer.observe(cardElement);

    return (): void => observer.disconnect();
  }, []);

  return (
    <article
      className={clsx(
        'group flex grow flex-col gap-3 rounded-2xl border border-transparent p-4 transition-all duration-500 ease-out md:flex-row md:gap-12 lg:p-6',
        'lg:group-hover/list:scale-[0.98] lg:group-hover/list:opacity-50',
        'lg:hover:scale-105! lg:hover:opacity-100!',
        'lg:hover:glassmorphism-background lg:hover:shadow-2xl',
        'data-[active=true]:glassmorphism-background data-[active=true]:scale-105! data-[active=true]:shadow-2xl',
      )}
      ref={cardRef}
    >
      <div className="flex max-w-20 shrink-0 pt-1">
        <span className="body-xs text-primary-80 font-medium tracking-wide uppercase">
          {period}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <a
          aria-label={`${position} · ${companyName}`}
          className="flex"
          href={url}
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h3
            className={clsx(
              'body-md leading-tight! font-bold transition-colors duration-300 ease-in-out',
              'lg:group-hover:text-primary-100',
              'max-lg:group-data-[active=true]:text-primary-100',
            )}
          >
            {position} · <span className="text-primary-100">{companyName}</span>
          </h3>
        </a>
        <p className="body-xs text-primary-80 leading-relaxed font-normal">
          {description}
        </p>
        <ul className="flex flex-row flex-wrap gap-2">
          {stack.map((tag): React.ReactElement => {
            return <TechTag key={tag} tag={tag} />;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
