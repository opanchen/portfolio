import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next-intl/link";

const LangToggle: React.FC = () => {
  const locate = useLocale();
  //   console.log("current lang: ", locate);

  return (
    <div>
      <Link href="/" locale="en">
        In English
      </Link>{" "}
      |{" "}
      <Link href="/" locale="uk">
        In Ukrainian
      </Link>
      <br />
      <br />
    </div>
  );
};

export default LangToggle;
