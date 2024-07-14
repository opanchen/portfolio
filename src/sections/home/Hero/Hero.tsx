import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { HeroImage } from '@/components/ui/HeroImage';
import { HeroAnimationWrapper } from '@/components/ui/HeroAnimationWrapper';
import { AnimatedTypeLine } from '@/components/ui/AnimatedTypeLine';
import { Container } from '@/components/ui/Container';

export const Hero: React.FC = () => {
  const t = useTranslations('Hero');

  const subtitles = [t('subtitle.1st'), t('subtitle.2nd')];

  return (
    <section className="pb-[16px] pt-[54px] md:py-[16px] xl:py-[32px]">
      <Container>
        <div className="flex flex-col items-center gap-[16px] sm:relative md:flex-row-reverse xl:justify-between xl:gap-0">
          <HeroImage />

          <HeroAnimationWrapper>
            <div className="flex flex-col gap-[8px] xl:w-[560px] xl:gap-[16px]">
              <h1 className="gradient-primary bg-clip-text text-[36px] font-bold text-transparent md:text-[64px]">
                <span className="mb-[8px] block text-center leading-none sm:text-left">
                  {t('title')}
                </span>

                <AnimatedTypeLine text={subtitles} />
              </h1>
              <p className="xl: right-0 top-[200px] self-end text-[12px] font-medium text-gray-primary dark:text-gray-secondary sm:absolute sm:w-[160px] md:bottom-[48px] md:top-auto xl:static">
                {t('tagline')}✨
              </p>
              <p className="text-primary">{t('summary')}</p>

              <Link
                href="#contacts"
                className="gradient-primary bg-white focus-shadow-md transition_prop group flex w-full cursor-pointer justify-center self-center rounded-xl px-[16px] py-[8px] text-[18px] font-medium uppercase text-white-primary shadow-sm hover:shadow-md focus:outline-none dark:bg-black-secondary dark:shadow-white-shadow sm:self-start xl:w-[400px]"
              >
                <span className="transition_prop inline-block group-hover:scale-110">
                  {t('button')}
                </span>
              </Link>
            </div>
          </HeroAnimationWrapper>
        </div>
      </Container>
    </section>
  );
};
