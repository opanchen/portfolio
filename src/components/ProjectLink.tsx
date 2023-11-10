import { useLocale } from "next-intl";

import Link from "next/link";

import { FiExternalLink, FiDownloadCloud } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

type Props = {
  type: "demo" | "gh" | "download";
  href: string;
};

type Icon = {
  type: "demo" | "gh" | "download";
  size?: number;
};

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
    default:
      console.log("Error: unknown icon type");
      return;
  }
};

const ProjectLink: React.FC<Props> = ({ type, href }: Props) => {
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
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className="group focus:outline-none"
      aria-label={getLabel()}
    >
      {getIcon({ type })}
    </Link>
  );
};

export default ProjectLink;
