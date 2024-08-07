import { useTranslations } from 'next-intl';

import { ProjectList } from '@/components/ProjectList/ProjectList';
import { Container } from '@/components/ui/Container';

import { ProjectsProps } from './types';

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const t = useTranslations('Projects');

  const tabLabels = {
    all: t('kind.all'),
    individual: t('kind.individual'),
    collaboration: t('kind.collaboration'),
  };

  return (
    <section id="projects" className="py-[16px]">
      <Container>
        <div className="">
          <h2 className="text-section-title mb-[16px] text-center sm:text-left">
            {t('title')}
          </h2>

          <ProjectList
            projects={data}
            tabLabels={tabLabels}
            showMoreBtnLabel={t('showMoreBtnLabel')}
          />
        </div>
      </Container>
    </section>
  );
};
