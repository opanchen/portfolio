import TechLogo from "./TechLogo";

import techStack from "../data/tech-stack.json";

const StackList: React.FC = () => {
  return (
    <ul className="shrink-0 md:w-[336px] xl:w-1/2 flex gap-[16px] flex-wrap">
      {techStack.map(({ name, image }) => {
        return (
          <li
            key={name}
            className="stack-card aspect-[3/4] flex flex-col justify-center items-center gap-[8px] rounded-md shadow dark:shadow-zinc-100 bg-neutral-500 dark:bg-neutral-800 text-white-primary"
          >
            <TechLogo src={image} alt={name} size={54} />
            <p className="font-extralight text-[12px]">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default StackList;
