import { motion } from 'framer-motion';

import { TechLogo } from '@/components/ui/TechLogo';

import { TechCardProps } from './types';

export const TechCard: React.FC<TechCardProps> = ({
  name,
  src,
  delay,
  isInView,
}) => {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.li
      variants={cardVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      transition={{ duration: 0.3, delay }}
      key={name}
      className="stack-card aspect-[3/4]"
      style={{}}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-[8px] rounded-md bg-white-primary text-gray-primary shadow dark:bg-black-secondary dark:text-white-primary dark:shadow-white-shadow">
        <TechLogo src={src} alt={name} size={54} />
        <p className="text-[12px] font-extralight">{name}</p>
      </div>
    </motion.li>
  );
};
