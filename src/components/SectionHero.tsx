import { useTranslations } from "next-intl";

import Image from "next/image";
import { AnimatedTypeLine, Container } from "@components";

const SectionHero: React.FC = () => {
  const t = useTranslations("Hero");

  const subtitles = [t("subtitle.1st"), t("subtitle.2nd")];

  return (
    <section className="pt-[54px] md:py-[16px] xl:py-[32px]">
      <Container>
        <div className="sm:relative flex flex-col items-center md:flex-row-reverse gap-[16px] xl:gap-0 xl:justify-between">
          <div className="shrink-[0] relative w-[240px] h-[240px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden gradient-primary sm:self-start">
            <Image
              src="/assets/images/hero.png"
              alt="Picture of the author"
              width={400}
              height={500}
              priority={true}
              className="absolute left-[45%] translate-x-[-50%]"
            />
          </div>
          <div className="flex flex-col gap-[8px] xl:gap-[16px] xl:w-[560px]">
            <h1 className="text-[36px] md:text-[64px] font-bold text-transparent bg-clip-text gradient-primary">
              <span className="block text-center leading-none mb-[8px] sm:text-left">
                {" "}
                {t("title")}
              </span>

              <AnimatedTypeLine text={subtitles} />
            </h1>
            <p className="sm:absolute xl:static top-[200px] right-0 md:bottom-[48px] md:top-auto xl: self-end sm:w-[160px] text-[12px] font-medium text-slate-500 dark:text-zinc-600">
              {t("tagline")}✨
            </p>
            <p className="font-extralight text-[14px]">{t("summary")}</p>

            <button
              type="button"
              className="px-[16px] py-[8px] text-[18px] text-white font-medium uppercase gradient-primary rounded-xl cursor-pointer"
            >
              {t("uploadCV")}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionHero;
