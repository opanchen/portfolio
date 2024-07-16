import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';

import UIThemeProvider from './providers';

import { Inter } from 'next/font/google';

import { fetchMetadata } from '@/sanity/requests/fetchMetadata';

import { AppBar } from '@/layout/AppBar';
import { Footer } from '@/layout/Footer';
import { ScrollToTopBtn } from '@/components/ui/ScrollToTopBtn/ScrollToTopBtn';

import metaStatic from '@/data/meta.json';

import '../../globals.css';

const locales = ['en', 'uk'];

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const { title, manifest, description, keywords, openGraph, icons } =
    metaStatic;

  const data = await fetchMetadata();

  return {
    title: data.title || title,
    description: data.description || description,
    keywords: data.keywords || keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
    manifest,
    openGraph: {
      ...openGraph,
      title: data.title || title,
      description: data.description || description,
      url: baseUrl,
    },
    icons,
  };
}

type Props = {
  children: React.ReactNode;
  params: {
    locale: 'en' | 'uk';
  };
};

const RootLayout: React.FC<Props> = ({
  children,
  params: { locale },
}: Props) => {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some(cur => cur === locale);
  if (!isValidLocale) notFound();

  // Passing as props to the client-component:
  const t = useTranslations('Header');
  const tSecondary = useTranslations('Common');

  const navContent = [
    {
      key: 'projects',
      value: t(`nav.projects`),
    },
    {
      key: 'skills',
      value: t(`nav.skills`),
    },
    {
      key: 'contacts',
      value: t(`nav.contacts`),
    },
  ];

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body
        className={`${inter.className} bg-white-secondary dark:bg-black-primary dark:text-white-primary`}
      >
        <UIThemeProvider>
          <AppBar navContent={navContent} />
          <main>{children}</main>
          <ScrollToTopBtn label={tSecondary('scroll-up-btn')} />
          <Footer />
          <div id="modal" />
        </UIThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
