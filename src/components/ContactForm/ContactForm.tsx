'use client';

import { useLocale } from 'next-intl';

import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FormErrorMessage } from '@/components/ui/FormErrorMessage';

import { sendEmail } from '@/utils';

import { FormData } from './types';

export const ContactForm: React.FC = () => {
  const locale = useLocale();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useFormPersist('opanchen-portfolio-form', {
    watch,
    setValue,
  });

  const handleFormSubmit: SubmitHandler<FormData> = data => {
    sendEmail(data, locale);
    reset();
  };

  return (
    <>
      <form
        className="flex shrink-0 flex-col gap-[16px] md:w-[336px] xl:w-[616px]"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="flex flex-col gap-[16px] xl:flex-row">
          <label className="form_label xl:w-[300px]">
            {locale === 'en' ? 'Email' : 'Електронна пошта'}
            <input
              {...register('email', {
                required: `${
                  locale === 'en' ? 'Email is required' : 'Обовʼязкове поле'
                }`,
                // TODO: Update/fix pattern below
                // pattern: {
                //   value: /^[w-.]+@([w-]+.)+[w-]{2,4}$/, //eslint-disable-line
                //   message: `${
                //     locale === 'en' ? 'Invalid email' : 'Невалідна адреса'
                //   }`,
                // },
              })}
              type="email"
              aria-invalid={errors.email ? true : false}
              placeholder="johndoe@email.com"
              className="form_input"
            />
            {errors.email?.message && (
              <FormErrorMessage message={errors.email.message} />
            )}
          </label>

          <label className="form_label xl:w-[300px]">
            {locale === 'en' ? 'Telegram' : 'Телеграм'}
            <input
              {...register('telegram')}
              type="text"
              className="form_input"
              placeholder="https://t.me/johndoe"
            />
          </label>
        </div>

        <label className="form_label">
          {locale === 'en' ? 'Message' : 'Повідомлення'}
          <textarea
            className="form_input h-[80px] resize-none xl:h-[120px]"
            {...register('message', {
              required: `${
                locale === 'en' ? 'Message is required' : 'Обовʼязкове поле'
              }`,
            })}
            aria-invalid={errors.message ? true : false}
          />
          {errors.message?.message && (
            <FormErrorMessage message={errors.message.message} />
          )}
        </label>
        <button
          className="gradient-primary transition_prop group relative self-end bg-clip-text text-[20px] font-bold uppercase text-transparent hover:scale-110 focus:scale-110 focus:outline-none md:self-start"
          type="submit"
        >
          <span className="submit-btn_text-outline">
            {locale === 'en' ? 'Send' : 'Відправити'}
          </span>
        </button>
      </form>

      <ToastContainer />
    </>
  );
};
