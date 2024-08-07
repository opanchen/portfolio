import { useLocale } from 'next-intl';

import { HeroImage } from '@/components/ui/HeroImage';
import { HeroAnimationWrapper } from '@/components/ui/HeroAnimationWrapper';
import { AnimatedTypeLine } from '@/components/ui/AnimatedTypeLine';
import { Container } from '@/components/ui/Container';
import { HeroButton } from '@/components/ui/HeroButton';

import { HeroResponse } from '@/types/cms-landing.types';
import { HeroProps } from './types';

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const locale = useLocale();

  const { heading, tagline, majors, about, heroBtnLabel } =
    data[locale as keyof HeroResponse];

  return (
    <section className="pb-[16px] pt-[54px] md:py-[16px] xl:py-[32px]">
      <Container>
        <div className="flex flex-col items-center gap-[16px] sm:relative md:flex-row-reverse xl:justify-between xl:gap-0">
          <HeroImage />

          <HeroAnimationWrapper>
            <div className="flex flex-col gap-[8px] xl:w-[560px] xl:gap-[16px]">
              <h1 className="gradient-primary bg-clip-text text-[36px] font-bold text-transparent md:text-[64px]">
                <span className="mb-[8px] block text-center leading-none sm:text-left">
                  {heading}
                </span>

                <AnimatedTypeLine text={majors} />
              </h1>
              <p className="xl: right-0 top-[200px] self-end text-[12px] font-medium text-gray-primary dark:text-gray-secondary sm:absolute sm:w-[160px] md:bottom-[48px] md:top-auto xl:static">
                {tagline}
              </p>
              <p className="text-primary">{about}</p>

              <HeroButton label={heroBtnLabel} />
            </div>
          </HeroAnimationWrapper>
        </div>
      </Container>
    </section>
  );
};
