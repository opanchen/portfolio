import Image from "next/image";

import type { Project } from "@types";

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }: Props) => {
  const { title, images, startDate, tech } = project;
  return (
    <div className="flex flex-col gap-[8px] w-full h-full p-[8px] sm:p-[16px] rounded-md shadow dark:shadow-zinc-100 bg-white dark:bg-neutral-800">
      <div className="thumb outline-dashed outline-lime-500 relative mb-[20px]">
        <Image
          src={`/assets/${images[0]}`}
          alt={title}
          width={400}
          height={300}
          className="w-auto h-auto"
        />
        <p className="absolute right-0 top-[100%] font-extralight text-[14px]">
          {startDate}
        </p>
      </div>
      {/* Must be some kind of <h> */}
      <p className="font-medium text-[16px] md:text-[20px] text-slate-500 dark:text-white text-center">
        {title}
      </p>

      <p className="font-extralight text-[12px] text-center">{tech}</p>
    </div>
  );
};

export default ProjectCard;
