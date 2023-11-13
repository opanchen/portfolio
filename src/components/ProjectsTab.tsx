type Props = {
  tab: string;
  name: string;
  onClick: (tab: string) => void;
  isSelected: boolean;
};

const ProjectsTab: React.FC<Props> = ({
  tab,
  name,
  onClick,
  isSelected,
}: Props) => {
  const handleClick = () => {
    onClick(tab);
  };
  return (
    <button
      className={`min-w-[54px] py-[4px] px-[8px] border-[1px] rounded-xl font-medium  text-[12px] sm:text-[14px] xl:text-[16px] shadow-sm dark:shadow-zinc-100 bg-white dark:bg-neutral-800 cursor-pointer hover:scale-110 focus:scale-110 hover:shadow focus-shadow focus:outline-none transition_prop  ${
        isSelected && "gradient-primary text-white pointer-events-none"
      }`}
      disabled={isSelected}
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default ProjectsTab;
