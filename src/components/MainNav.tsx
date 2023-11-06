import Link from "next/link";

type Props = {
  navContent: { [key: string]: string }[];
};

const MainNav: React.FC<Props> = ({ navContent }: Props) => {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-[8px] md:flex-row">
        {navContent.map((item, index) => (
          <li key={index}>
            <Link href={`#${item.key}`}>{item.value} </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
