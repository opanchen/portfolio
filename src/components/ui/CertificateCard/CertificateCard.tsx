'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useState } from 'react';

import { PiStudentLight } from 'react-icons/pi';
import { GoFileCode } from 'react-icons/go';
import { LiaAtomSolid } from 'react-icons/lia';
import { HiLanguage } from 'react-icons/hi2';
import { GrCertificate } from 'react-icons/gr';
import { MdOutlineFlipCameraAndroid } from 'react-icons/md';

import { IconLink } from '@/components/ui/IconLink';

import { CertificateIcon } from '@/types/cms-landing.types';
import { CertificateCardProps } from './types';

const getCertificateIcon = (icon: CertificateIcon, size: number) => {
  switch (icon) {
    case 'study':
      return <PiStudentLight size={size} />;

    case 'atom':
      return <LiaAtomSolid size={size} />;

    case 'code':
      return <GoFileCode size={size} />;

    case 'lang':
      return <HiLanguage size={size} />;

    default:
      return <GrCertificate size={size} />;
  }
};

export const CertificateCard: React.FC<CertificateCardProps> = ({
  data: { name, desc_en, desc_uk, company, uploadUrl, icon },
}) => {
  const [focus, setFocus] = useState(false);

  const locale = useLocale();
  const desc = locale === 'en' ? desc_en : desc_uk;

  const certificateIcon = getCertificateIcon(icon, 120);

  return (
    <li
      //   tabIndex={0}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      className={`certificate-card h-[auto] ${focus ? 'certificate-card-flip' : ''}`}
    >
      <div className="certificate-card-content relative h-full w-full">
        {/* Front side */}
        <div className="certificate-card-front flex flex-col items-center justify-center gap-2">
          {certificateIcon}

          <h4 className="text-center font-medium uppercase">{name}</h4>

          <p className="absolute bottom-2 font-extralight opacity-70 dark:opacity-50">
            {company.name}
          </p>

          <MdOutlineFlipCameraAndroid
            size={30}
            className="absolute bottom-2 right-2 opacity-50"
          />
        </div>

        {/* Back side */}
        <div className="certificate-card-back">
          <div className="mb-2 flex items-center justify-between">
            <Link
              href={company.companyUrl}
              className="transition_prop font-extralight hover:scale-110 focus:scale-110"
            >
              {company.name}
            </Link>

            <IconLink href={uploadUrl} type="download" />
          </div>

          <p>{desc}</p>
        </div>
      </div>
    </li>
  );
};
