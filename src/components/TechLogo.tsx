import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  size: number;
};

const TechLogo: React.FC<Props> = ({ src, size, alt }: Props) => {
  return src.startsWith("devicon") ? (
    <i style={{ fontSize: size }} className={src}></i>
  ) : (
    <Image src={`/assets/${src}`} width={size} height={size} alt={alt} />
  );
};

export default TechLogo;
