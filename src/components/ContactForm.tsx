"use client";

import { useLocale } from "next-intl";

import { useForm, SubmitHandler } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FormErrorMessage } from "@components";

import { sendEmail } from "@utils";

export type FormData = {
  email: string;
  telegram: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const locale = useLocale();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useFormPersist("opanchen-portfolio-form", {
    watch,
    setValue,
  });

  const handleFormSubmit: SubmitHandler<FormData> = (data) => {
    sendEmail(data, locale);
    reset();
  };

  return (
    <>
      <form
        className="md:w-[336px] xl:w-[616px] shrink-0 flex flex-col gap-[16px]"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="flex flex-col gap-[16px] xl:flex-row">
          <label className="form_label xl:w-[300px]">
            {locale === "en" ? "Email" : "Електронна пошта"}
            <input
              {...register("email", {
                required: `${
                  locale === "en" ? "Email is required" : "Обовʼязкове поле"
                }`,
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: `${
                    locale === "en" ? "Invalid email" : "Невалідна адреса"
                  }`,
                },
              })}
              type="email"
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="johndoe@email.com"
              className="form_input"
            />
            {errors.email?.message && (
              <FormErrorMessage message={errors.email.message} />
            )}
          </label>

          <label className="form_label xl:w-[300px]">
            {locale === "en" ? "Telegram" : "Телеграм"}
            <input
              {...register("telegram")}
              type="text"
              className="form_input"
              placeholder="https://t.me/johndoe"
            />
          </label>
        </div>

        <label className="form_label">
          {locale === "en" ? "Message" : "Повідомлення"}
          <textarea
            className="form_input resize-none h-[80px] xl:h-[120px]"
            {...register("message", {
              required: `${
                locale === "en" ? "Message is required" : "Обовʼязкове поле"
              }`,
            })}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message?.message && (
            <FormErrorMessage message={errors.message.message} />
          )}
        </label>
        <button
          className="group relative self-end md:self-start uppercase text-[20px] font-bold text-transparent bg-clip-text gradient-primary focus:outline-none hover:scale-110 focus:scale-110 transition_prop"
          type="submit"
        >
          <span className="submit-btn_text-outline">
            {locale === "en" ? "Send" : "Відправити"}
          </span>
        </button>
      </form>

      <ToastContainer />
    </>
  );
};

export default ContactForm;
