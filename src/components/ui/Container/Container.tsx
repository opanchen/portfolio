import { ContainerProps } from './types';

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto px-[20px] sm:w-[480px] md:w-[768px] md:px-[32px] xl:w-[1280px] xl:px-[24px]">
      {children}
    </div>
  );
};
