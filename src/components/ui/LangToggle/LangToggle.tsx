import Image from 'next/image';
import Link from 'next/link';

import { useLocale } from 'next-intl';

export const LangToggle: React.FC = () => {
  const currentLocale = useLocale();

  const getLinkClassNames = (locale: 'en' | 'uk') => {
    return `text-[14px] group ${
      currentLocale === locale && 'pointer-events-none focus:outline-none'
    }`;
  };

  const getLabel = (locale: 'en' | 'uk') => {
    if (locale === 'en') {
      return currentLocale === 'en'
        ? 'Switch language of interface to English'
        : 'Переключити інтерфейс на Англійську';
    } else {
      return currentLocale === 'en'
        ? 'Switch language of interface to Ukrainian'
        : 'Переключити мову інтерфейсу на Українську';
    }
  };

  return (
    <ul className="flex gap-[8px]">
      <li>
        <Link
          href="/en/"
          className={getLinkClassNames('en')}
          aria-label={getLabel('en')}
        >
          <div className="transition_prop relative flex h-[20px] w-[32px] items-center justify-center overflow-hidden group-hover:scale-110 group-focus:scale-125">
            <Image
              src={
                'http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg'
              }
              width={36}
              height={24}
              alt={
                currentLocale === 'en' ? 'British flag' : 'Британський прапор'
              }
              className="cover block"
            />
            <div
              className={`absolute bottom-0 left-0 top-0 h-full w-full bg-black-primary bg-opacity-[0.7] ${
                currentLocale === 'en' ? 'block' : 'hidden'
              }`}
            ></div>
          </div>
        </Link>
      </li>

      <li>
        <Link
          href="/uk/"
          className={getLinkClassNames('uk')}
          aria-label={getLabel('uk')}
        >
          <div className="transition_prop relative flex h-[20px] w-[32px] items-center justify-center overflow-hidden group-hover:scale-110 group-focus:scale-125">
            <Image
              src={
                'http://purecatamphetamine.github.io/country-flag-icons/3x2/UA.svg'
              }
              width={36}
              height={24}
              alt={
                currentLocale === 'en' ? 'Ukrainian flag' : 'Український прапор'
              }
              className="cover block"
            />
            <div
              className={`absolute bottom-0 left-0 top-0 h-full w-full bg-black-primary bg-opacity-[0.7] ${
                currentLocale === 'uk' ? 'block' : 'hidden'
              }`}
            ></div>
          </div>
        </Link>
      </li>
    </ul>
  );
};
