import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ContactForm } from '@/components/ContactForm';
import { IconLink } from '@/components/ui/IconLink';
import { Container } from '@/components/ui/Container';

import { ContactsResponse } from '@/types/cms-landing.types';
import { ContactsProps } from './types';

export const Contacts: React.FC<ContactsProps> = ({ data }) => {
  const t = useTranslations('Contacts');

  const links = Object.keys(data)
    .filter(key => key !== 'cv')
    .map(key => ({
      name: key === 'gitHub' ? 'gh' : key,
      href: data[key as keyof ContactsResponse],
    }));

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
              {links.map(({ name, href }) => (
                <li className="soc-card aspect-[1/1]" key={name}>
                  <IconLink
                    type={name}
                    href={href}
                    size={32}
                    location="footer"
                  />
                </li>
              ))}
            </ul>

            <Link
              href={data.cv}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="transition_prop w-full rounded-md bg-white-primary p-[16px] text-center not-italic text-gray-primary shadow hover:scale-105 focus:scale-105 dark:bg-black-secondary dark:text-white-primary dark:shadow-white-shadow pre-sm:w-[240px] md:mb-auto md:w-full xl:w-[284px]"
            >
              {t('cv.label')}
            </Link>

            <Link
              href={`mailto:${data.email}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="transition_prop text-[14px] font-normal not-italic text-gray-primary underline-offset-4 hover:underline focus:underline dark:text-gray-secondary"
            >
              {data.email}
            </Link>
          </address>
        </div>
      </Container>
    </section>
  );
};
