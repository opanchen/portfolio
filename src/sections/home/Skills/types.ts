import { Certificate, Technology } from '@/types/cms-landing.types';

export type SkillsProps = {
  data: {
    techStack: Technology[];
    certificates: Certificate[];
  };
};
