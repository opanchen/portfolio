import { useLocale } from "next-intl";

import Link from "next-intl/link";

const LangToggle: React.FC = () => {
  const currentLocale = useLocale();

  const getLinkClassNames = (locale: "en" | "uk") => {
    return `p-[4px] text-[14px] ${
      currentLocale === locale && "border-b-[2px] border-orange-500"
    }`;
  };

  return (
    <ul className="flex gap-[8px]">
      <li>
        <Link href="/" locale="en" className={getLinkClassNames("en")}>
          En
        </Link>
      </li>
      <li>
        <Link href="/" locale="uk" className={getLinkClassNames("uk")}>
          Uk
        </Link>
      </li>
    </ul>
  );
};

export default LangToggle;
