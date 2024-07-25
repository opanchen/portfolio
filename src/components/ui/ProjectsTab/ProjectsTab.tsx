import { ProjectsTabProps } from './types';

export const ProjectsTab: React.FC<ProjectsTabProps> = ({
  tab,
  name,
  onClick,
  isSelected,
}) => {
  const handleClick = () => {
    onClick(tab);
  };
  return (
    <button
      className={`focus-shadow transition_prop min-w-[54px] cursor-pointer rounded-xl border-[1px] bg-white-primary px-[8px] py-[4px] text-[12px] font-medium shadow-sm hover:scale-110 hover:shadow focus:scale-110 dark:bg-black-secondary dark:shadow-white-shadow sm:text-[14px] xl:text-[16px] ${
        isSelected
          ? 'gradient-primary pointer-events-none text-white-primary'
          : ''
      }`}
      disabled={isSelected}
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};
