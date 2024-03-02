export type ProjectsTabProps = {
  tab: string;
  name: string;
  onClick: (tab: string) => void;
  isSelected: boolean;
};
