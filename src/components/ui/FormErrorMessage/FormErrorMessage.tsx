import { VscError } from 'react-icons/vsc';

import { FormErrorMessageProps } from './types';

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  message,
}) => {
  return (
    <div className="absolute right-0 top-[100%] flex items-center gap-[4px]">
      <VscError />
      <p
        role="alert"
        className="text-red text-[12px] font-extralight leading-[2.0] tracking-[2.4px]"
      >
        {message}
      </p>
    </div>
  );
};

export default FormErrorMessage;
