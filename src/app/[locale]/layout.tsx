import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { notFound } from "next/navigation";
import { AppBar } from "@components/index";

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

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <AppBar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
