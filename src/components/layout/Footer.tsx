import Link from "next/link";
import { useTranslations } from "next-intl";

import { ContactForm, Container, IconLink, TryzubIcon } from "@components";

const Footer: React.FC = () => {
  const t = useTranslations("Contacts");
  const links = t("link-list").split(", ");

  return (
    <footer id="contacts" className="py-[16px]">
      <Container>
        <p className="text-[20px] font-bold md:text-[32px] uppercase text-gray-primary dark:text-white-primary text-center sm:text-left">
          Contact me
        </p>
        <div className="mb-[16px] xl:mb-[32px] flex flex-col gap-[16px] md:flex-row md:gap-[32px] md:justify-end xl:justify-between">
          <ContactForm />

          <address className="flex flex-col gap-[16px] pre-sm:items-center md:w-full xl:w-[284px]">
            <ul className="flex pre-sm:inline-flex items-center justify-between pre-sm:justify-normal pre-sm:gap-[16px] md:w-full">
              {links.map((item) => (
                <li className="soc-card aspect-[1/1]" key={item}>
                  <IconLink
                    type={item}
                    href={t(`links.${item}`)}
                    size={32}
                    location="footer"
                  />
                </li>
              ))}
            </ul>

            <button
              className="md:mb-auto w-full pre-sm:w-[240px] md:w-full xl:w-[284px] p-[16px] rounded-md shadow dark:shadow-white-shadow bg-white-primary text-gray-primary dark:bg-black-secondary dark:text-white-primary hover:scale-105 focus:outline-none focus:scale-105 transition_prop"
              type="button"
            >
              {t("cv")}
            </button>

            <Link
              href={t("links.email")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="font-normal not-italic text-[14px] text-gray-primary dark:text-gray-secondary focus:outline-none focus:underline hover:underline underline-offset-4 transition_prop"
            >
              opanchen.dev@gmail.com
            </Link>
          </address>
        </div>

        <div className="w-full flex justify-center">
          <TryzubIcon />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
