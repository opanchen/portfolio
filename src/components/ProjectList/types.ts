import { TabLabels } from '@/types';
import { Project } from '@/types/cms-landing.types';

export type ProjectListProps = {
  projects: Project[];
  tabLabels: TabLabels;
};
