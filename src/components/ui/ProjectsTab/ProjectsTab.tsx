import { ProjectsTabProps } from "./types";

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
      className={`min-w-[54px] py-[4px] px-[8px] border-[1px] rounded-xl font-medium  text-[12px] sm:text-[14px] xl:text-[16px] shadow-sm dark:shadow-white-shadow bg-white-primary dark:bg-black-secondary cursor-pointer hover:scale-110 focus:scale-110 hover:shadow focus-shadow focus:outline-none transition_prop  ${
        isSelected
          ? "gradient-primary text-white-primary pointer-events-none"
          : ""
      }`}
      disabled={isSelected}
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};
