import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ContactForm } from '@/components/ContactForm';
import { IconLink } from '@/components/ui/IconLink';
import { Container } from '@/components/ui/Container';

export const Contacts: React.FC = () => {
  const t = useTranslations('Contacts');
  const links = t('link-list').split(', ');

  return (
    <section id="contacts" className="py-[16px]">
      <Container>
        <p className="text-center text-[20px] font-bold uppercase text-gray-primary dark:text-white-primary sm:text-left md:text-[32px]">
          {t('title')}
        </p>
        <div className="mb-[16px] flex flex-col gap-[16px] md:flex-row md:justify-end md:gap-[32px] xl:mb-[32px] xl:justify-between">
          <ContactForm />

          <address className="flex flex-col gap-[16px] pre-sm:items-center md:w-full xl:w-[284px]">
            <ul className="flex items-center justify-between pre-sm:inline-flex pre-sm:justify-normal pre-sm:gap-[16px] md:w-full">
              {links.map(item => (
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

            <Link
              href={t('cv.url')}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="transition_prop w-full rounded-md bg-white-primary p-[16px] text-center not-italic text-gray-primary shadow hover:scale-105 focus:scale-105 focus:outline-none dark:bg-black-secondary dark:text-white-primary dark:shadow-white-shadow pre-sm:w-[240px] md:mb-auto md:w-full xl:w-[284px]"
            >
              {t('cv.label')}
            </Link>

            <Link
              href={t('links.email')}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="transition_prop text-[14px] font-normal not-italic text-gray-primary underline-offset-4 hover:underline focus:underline focus:outline-none dark:text-gray-secondary"
            >
              opanchen.dev@gmail.com
            </Link>
          </address>
        </div>
      </Container>
    </section>
  );
};
