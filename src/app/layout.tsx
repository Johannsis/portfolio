import 'server-only';

import clsx from 'clsx/lite';
import type { Metadata, Viewport } from 'next';

import { siteUrl } from '@jh/data/user';
import { isProd } from '@jh/flags/environment';
import { montserrat } from '@jh/styles/fonts/montserrat';

import '../styles/global.css';

export const metadata: Metadata = {
  authors: [{ name: 'Johannes Hoersch', url: siteUrl }],
  description:
    'Johannes Hoersch — Senior Front-End Developer based in Santo Domingo, DR. Building fast, accessible, and beautiful digital experiences with Next.js, React, and TypeScript.',
  keywords: [
    'Software Engineer',
    'Front-End Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Johannes Hoersch',
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    description:
      'Johannes Hoersch — Senior Front-End Developer. Building fast, accessible, and beautiful digital experiences.',
    locale: 'en_US',
    siteName: 'Johannes Hoersch Portfolio',
    title: 'Johannes Hoersch | Senior Front-End Developer',
    type: 'website',
    url: siteUrl,
  },
  title: 'Johannes Hoersch | Senior Front-End Developer',
  twitter: {
    card: 'summary',
    description:
      'Johannes Hoersch — Senior Front-End Developer. Building fast, accessible, and beautiful digital experiences.',
    title: 'Johannes Hoersch | Senior Front-End Developer',
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  jobTitle: 'Senior Front-End Developer',
  name: 'Johannes Hoersch',
  sameAs: [
    'https://github.com/Johannsis',
    'https://www.linkedin.com/in/johanneshoersch/',
  ],
  url: siteUrl,
  worksFor: {
    '@type': 'Organization',
    name: 'TelevisaUnivision',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  const isProduction = isProd();

  return (
    <html
      className={clsx(montserrat.variable, 'bg-primary-10 scroll-smooth')}
      lang="en"
    >
      <head>
        <meta content="#0d1117" name="theme-color" />
        <link
          href={
            isProduction
              ? '/portfolio/images/favicon.ico'
              : '/images/favicon.ico'
          }
          rel="icon"
          type="image/x-icon"
        />
        <link
          href={
            isProduction
              ? '/portfolio/images/apple-touch-icon.png'
              : '/images/apple-touch-icon.png'
          }
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href={
            isProduction
              ? '/portfolio/images/favicon-32x32.png'
              : '/images/favicon-32x32.png'
          }
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href={
            isProduction
              ? '/portfolio/images/favicon-16x16.png'
              : '/images/favicon-16x16.png'
          }
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </head>
      <body className="m-0 antialiased">{children}</body>
    </html>
  );
}
