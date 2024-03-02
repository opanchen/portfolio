import { VscError } from "react-icons/vsc";

import { FormErrorMessageProps } from "./types";

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  message,
}) => {
  return (
    <div className="absolute right-0 top-[100%] flex items-center gap-[4px]">
      <VscError />
      <p
        role="alert"
        className="text-[12px] font-extralight leading-[2.0] tracking-[2.4px] text-red"
      >
        {message}
      </p>
    </div>
  );
};

export default FormErrorMessage;
