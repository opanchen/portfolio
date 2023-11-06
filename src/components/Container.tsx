type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="mx-auto px-[20px] md:px-[32px] xl:px-[24px] sm:w-[480px] md:w-[768px] xl:w-[1280px]">
      {children}
    </div>
  );
};

export default Container;
