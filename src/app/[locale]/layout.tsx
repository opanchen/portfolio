import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";

import UIThemeProvider from "./providers";
import { AppBar, Footer } from "@components/layout";
import { ScrollToTopBtn } from "@components";

import { Inter } from "next/font/google";

import "./globals.css";

const locales = ["en", "uk"];

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",

  description: "Cook borsch, write code and never stop exploring.",

  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),

  manifest: "/meta/site.webmanifest",

  keywords:
    "IT, Web developer, Front-end, Full-stack, Programming, JavaScript, MERN, UI, website, Ukraine",

  openGraph: {
    title: "Portfolio",
    description: "Cook borsch, write code and never stop exploring.",
    siteName: "Portfolio",
    locale: "en-US",
    images: [
      {
        url: "/meta/ogp-image.jpg",
        width: 2560,
        height: 1080,
        alt: "Oleh Panchenko. Web developer.",
      },
    ],
    url: process.env.NEXT_PUBLIC_BASE_URL as string,
  },

  icons: {
    icon: [
      {
        url: "/meta/favicon.ico",
      },
      {
        url: "/meta/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/meta/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/meta/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/meta/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/meta/favicon.ico",
    apple: "/meta/apple-touch-icon.png",
    other: {
      rel: "/meta/apple-touch-icon.png",
      url: "/meta/apple-touch-icon.png",
    },
  },
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: "en" | "uk";
  };
};

const RootLayout: React.FC<Props> = ({
  children,
  params: { locale },
}: Props) => {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  // Passing as props to the client-component:
  const t = useTranslations("Header");
  const tSecondary = useTranslations("Common");

  const navContent = [
    {
      key: "projects",
      value: t(`nav.projects`),
    },
    {
      key: "skills",
      value: t(`nav.skills`),
    },
    {
      key: "contacts",
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
        className={`${inter.className} dark:text-white-primary bg-white-secondary dark:bg-black-primary`}
      >
        <UIThemeProvider>
          <AppBar navContent={navContent} />

          <main>{children}</main>

          <ScrollToTopBtn label={tSecondary("scroll-up-btn")} />

          <Footer />

          <div id="modal" />
        </UIThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
