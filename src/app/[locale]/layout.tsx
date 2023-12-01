import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "@devicon.min.css";

import { notFound } from "next/navigation";
import { AppBar, Footer } from "@components";
import UIThemeProvider from "./providers";
import { useTranslations } from "next-intl";

const locales = ["en", "uk"];

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
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
        className={`${inter.className} dark:text-white bg-[#eff1ea] dark:bg-[#191919]`}
      >
        <UIThemeProvider>
          <AppBar navContent={navContent} />
          <main>{children}</main>
          <Footer />
          <div id="modal" />
        </UIThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
