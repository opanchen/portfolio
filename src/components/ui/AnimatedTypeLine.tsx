"use client";

import { TypeAnimation } from "react-type-animation";

type Props = {
  text: string[];
};

const AnimatedTypeLine: React.FC<Props> = ({ text }: Props) => {
  const delay = 1000;
  const sequence: Array<number | string> = [delay];
  text.forEach((item) => {
    sequence.push(item);
    sequence.push(delay);
  });

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      cursor={false}
      speed={25}
      className="block text-gray-primary dark:text-white-primary text-[20px] md:text-[32px] uppercase"
      repeat={Infinity}
    />
  );
};

export default AnimatedTypeLine;
