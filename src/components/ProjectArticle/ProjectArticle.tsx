'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import { IconLink } from '@/components/ui/IconLink';
import { TechLogo } from '@/components/ui/TechLogo';

import { ProjectArticleProps } from './types';

export const ProjectArticle: React.FC<ProjectArticleProps> = ({ project }) => {
  const locale = useLocale();

  const sliderRef = useRef<any>(null);

  const { title, description, role, technologies, images, urlDemo, urlGH } =
    project;

  const slides = images;

  return (
    <article className="flex w-full flex-col items-center gap-[16px] p-[16px]">
      <div className="relative flex w-full justify-center px-[16px] md:px-[24px]">
        <Swiper
          className="slider max-w-full lg:max-w-[400px] 2xl:max-w-full"
          ref={sliderRef}
          onInit={(core: SwiperCore) => {
            sliderRef.current = core.el;
          }}
          loop={true}
          speed={1000}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides
          lazyPreloadPrevNext={1}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          modules={[Navigation]}
        >
          {slides.map((path, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-md">
                <Image
                  src={`/assets/${path}`}
                  alt={title}
                  width={600}
                  height={450}
                  className="inline-block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className="prev transition_prop absolute left-[-8px] top-1/2 translate-y-[-50%] hover:scale-125 focus:scale-125 focus:outline-none sm:left-[-16px] md:left-[-16px] lg:left-0 2xl:left-[-20px]"
          aria-label={
            locale === 'en' ? 'Previous picture' : 'Попереднє зображення'
          }
        >
          <BsChevronCompactLeft
            size={48}
            className="w-[24px] sm:w-[32px] md:w-[40px]"
          />
        </button>

        <button
          type="button"
          className="next transition_prop absolute right-[-8px] top-1/2 translate-y-[-50%] hover:scale-125 focus:scale-125 focus:outline-none sm:right-[-16px] md:right-[-16px] lg:right-0 2xl:right-[-20px]"
          aria-label={locale === 'en' ? 'Next picture' : 'Наступне зображення'}
        >
          <BsChevronCompactRight
            size={48}
            className="w-[24px] sm:w-[32px] md:w-[40px]"
          />
        </button>
      </div>

      <h4 className="text-[20px] font-medium">{title}</h4>

      <ul className="flex gap-[8px] self-start">
        <li>
          <IconLink type="demo" href={urlDemo} />
        </li>
        <li>
          <IconLink type="gh" href={urlGH} />
        </li>
      </ul>

      <p className="text-primary self-start">
        {locale === 'en' ? description.en : description.uk}
      </p>

      {role && (
        <p className="text-primary self-start">
          <span className="font-medium">
            {locale === 'en' ? 'Position: ' : 'Посада: '}
          </span>
          {locale === 'en' ? role.en : role.uk}
        </p>
      )}

      <ul className="flex flex-wrap justify-center gap-[8px]">
        {technologies.map(({ name, image }) => (
          <li key={name} className="flex flex-col items-center">
            <TechLogo src={image} alt={name} size={32} />
            <p className="mt-auto text-[8px] font-extralight">{name}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};
