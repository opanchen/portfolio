export type ProjectsTabProps = {
  tab: string;
  name: string;
  onClick: (tab: string) => void; //eslint-disable-line
  isSelected: boolean;
};
