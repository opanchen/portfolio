import { useTranslations } from 'next-intl';

import { PiStudentLight } from 'react-icons/pi';

import { StackList } from '@/components/StackList';
import { Container } from '@/components/ui/Container';
import { CertificateCard } from '@/components/ui/CertificateCard';

import { SkillsProps } from './types';

export const Skills: React.FC<SkillsProps> = ({
  data: { techStack, certificates },
}) => {
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

            <ul className="flex h-full w-full flex-col flex-wrap gap-6 md:flex-row xl:h-auto xl:gap-[16px]">
              {certificates.map((item, idx) => (
                <CertificateCard data={item} key={idx} />
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
