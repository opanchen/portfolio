import Image from 'next/image';

import { TechLogoProps } from './types';

export const TechLogo: React.FC<TechLogoProps> = ({ src, size, alt }) => {
  return src?.startsWith('devicon') ? (
    <i style={{ fontSize: size }} className={src}></i>
  ) : (
    <Image src={`/assets/${src}`} width={size} height={size} alt={alt} />
  );
};
