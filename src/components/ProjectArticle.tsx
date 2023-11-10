"use client";

import { useLocale } from "next-intl";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import Image from "next/image";
import { ProjectLink, TechLogo } from "@components";

import type { Project } from "@types";

type Props = {
  project: Project;
};

const ProjectArticle: React.FC<Props> = ({ project }: Props) => {
  const locale = useLocale();

  const sliderRef = useRef<any>(null);

  const { title, description, role, technologies, images, urlDemo, urlGH } =
    project;

  const slides = [...images, ...images, ...images, ...images];

  return (
    <article className="flex flex-col items-center gap-[16px] p-[16px]">
      <div className="relative w-full flex justify-center px-[16px] md:px-[24px]">
        <Swiper
          className="slider lg:max-w-[400px] 2xl:max-w-full"
          ref={sliderRef}
          onInit={(core: SwiperCore) => {
            sliderRef.current = core.el;
          }}
          loop={true}
          speed={1000}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Navigation]}
        >
          {slides.map((path, index) => (
            <SwiperSlide key={index}>
              <div className="w-full aspect-[4/3] rounded-md overflow-hidden">
                <Image
                  src={`/assets/${path}`}
                  alt={title}
                  width={600}
                  height={450}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className="prev absolute top-1/2 left-[-8px] sm:left-[-16px] md:left-[-20px] lg:left-0 2xl:left-[-20px] translate-y-[-50%] hover:scale-125 focus:outline-none focus:scale-125 transition_prop"
          aria-label={
            locale === "en" ? "Previous picture" : "Попереднє зображення"
          }
        >
          <BsChevronCompactLeft
            size={48}
            className="w-[24px] sm:w-[32px] md:w-[40px]"
          />
        </button>

        <button
          type="button"
          className="next absolute top-1/2 right-[-8px] sm:right-[-16px] md:right-[-20px] lg:right-0 2xl:right-[-20px] translate-y-[-50%] hover:scale-125 focus:outline-none focus:scale-125 transition_prop"
          aria-label={locale === "en" ? "Next picture" : "Наступне зображення"}
        >
          <BsChevronCompactRight
            size={48}
            className="w-[24px] sm:w-[32px] md:w-[40px]"
          />
        </button>
      </div>

      <h4>{title}</h4>

      <ul className="flex self-start gap-[8px]">
        <li>
          <ProjectLink type="demo" href={urlDemo} />
        </li>
        <li>
          <ProjectLink type="gh" href={urlGH} />
        </li>
      </ul>

      <p className="text-primary">
        {locale === "en" ? description.en : description.uk}
      </p>

      {role && <p className="text-primary">{role}</p>}

      <ul className="flex gap-[8px] justify-center flex-wrap">
        {technologies.map(({ name, image }) => (
          <li key={name} className="flex flex-col items-center">
            <TechLogo src={image} alt={name} size={32} />
            <p className="font-extralight text-[8px]">{name}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectArticle;