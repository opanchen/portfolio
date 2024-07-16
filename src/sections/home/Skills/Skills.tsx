import { useLocale, useTranslations } from 'next-intl';

import { PiStudentLight } from 'react-icons/pi';

import { StackList } from '@/components/StackList';
import { IconLink } from '@/components/ui/IconLink';
import { Container } from '@/components/ui/Container';

import { SkillsProps } from './types';

export const Skills: React.FC<SkillsProps> = ({
  data: { techStack, certificates },
}) => {
  const locale = useLocale();
  const t = useTranslations('Skills');

  return (
    <section id="skills" className="py-[16px]">
      <Container>
        <h2 className="text-section-title text-center sm:text-left">
          {t('title')}
        </h2>

        <div className="flex flex-col gap-[16px] md:flex-row md:items-stretch md:gap-[32px]">
          <h3 className="sr-only">{t('stack.title')}</h3>

          <StackList techStack={techStack} />

          <div className="relative grow">
            <h3 className="text-section-title bottom-[100%] left-0 text-center md:absolute md:text-left">
              {t('certificates.title')}
            </h3>

            <ul className="flex w-full flex-col flex-wrap gap-[16px] md:flex-row">
              {certificates.map((item, idx) => (
                <li
                  key={idx}
                  className="certificate-card rounded-md bg-white-primary p-[16px] text-gray-primary shadow dark:bg-black-secondary dark:text-white-primary dark:shadow-white-shadow"
                >
                  <article className="flex flex-col gap-[8px]">
                    <h4 className="text-center font-medium uppercase">
                      {item.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <p>{item.company.name}</p>
                      <IconLink href={item.uploadUrl} type="download" />
                    </div>
                    <p className="text-primary">
                      {locale === 'en' ? item.desc_en : item.desc_uk}
                    </p>
                  </article>
                </li>
              ))}

              {/* Placeholder for desktop */}
              {certificates.length === 1 && (
                <li className="certificate-card hidden items-center justify-center rounded-md bg-white-primary p-[8px] text-gray-primary shadow dark:bg-black-secondary dark:text-white-primary dark:shadow-white-shadow xl:flex">
                  <PiStudentLight size={120} />
                </li>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
