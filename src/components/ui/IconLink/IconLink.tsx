import Link from "next/link";

import { useLocale } from "next-intl";

import { FiExternalLink, FiDownloadCloud } from "react-icons/fi";
import { BsGithub, BsFillEnvelopeAtFill } from "react-icons/bs";
import { BiLogoTelegram, BiLogoLinkedin } from "react-icons/bi";

import { Icon, IconLinkProps } from "./types";

const getIcon = ({ type, size = 24 }: Icon) => {
  switch (type) {
    case "demo":
      return (
        <FiExternalLink
          size={size}
          className="group-hover:scale-125 group-focus:scale-125 transition_prop"
        />
      );

    case "gh":
      return (
        <BsGithub
          size={size}
          className="group-hover:scale-125 group-focus:scale-125 transition_prop"
        />
      );

    case "download":
      return (
        <FiDownloadCloud
          size={size}
          className="group-hover:scale-125 group-focus:scale-125 transition_prop"
        />
      );

    case "linkedIn":
      return (
        <BiLogoLinkedin
          size={size}
          className="group-hover:scale-125 group-focus:scale-125 transition_prop"
        />
      );

    case "telegram":
      return (
        <BiLogoTelegram
          size={size}
          className="group-hover:scale-125 group-focus:scale-125 transition_prop"
        />
      );

    case "email":
      return (
        <BsFillEnvelopeAtFill
          size={size}
          className="group-hover:scale-125 group-focus:scale-125 transition_prop"
        />
      );

    default:
      console.log("Error: unknown icon type");
      return;
  }
};

export const IconLink: React.FC<IconLinkProps> = ({
  type,
  href,
  size,
  location,
}) => {
  const locale = useLocale();

  const getLabel = () => {
    if (type === "demo") {
      return locale === "en"
        ? `Link to live-page`
        : "Посилання на живу сторінку";
    }

    if (type === "gh") {
      return locale === "en"
        ? `Link to GitHub page`
        : "Посилання на сторінку GitHub";
    }

    if (type === "download") {
      return locale === "en"
        ? `Link to download file`
        : "Посилання для завантаження файлу";
    }

    if (type === "linkedIn") {
      return locale === "en"
        ? `Link to LinkedIn page`
        : "Посилання на сторінку LinkedIn";
    }

    if (type === "telegram") {
      return locale === "en"
        ? `Link to Telegram`
        : "Посилання на профіль Telegram";
    }

    if (type === "email") {
      return locale === "en"
        ? `Link to email`
        : "Посилання на електронну пошту";
    }
  };

  const footerClassNames =
    "aspect-square flex items-center justify-center p-[8px] rounded-md shadow dark:shadow-white-shadow bg-white-primary text-gray-primary dark:bg-black-secondary dark:text-white-primary focus:outline-none hover:scale-110 focus:scale-110 transition_prop";

  const classNames =
    location === "footer" ? footerClassNames : "group focus:outline-none";

  return (
    <Link
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={classNames}
      aria-label={getLabel()}
    >
      {getIcon({ type, size })}
    </Link>
  );
};
