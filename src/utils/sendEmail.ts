import { toast } from "react-toastify";
import type { FormData } from "@components/ContactForm";

export const sendEmail = (data: FormData, lang = "en") => {
  // console.log("SUBMIT: ", JSON.stringify(data));

  const apiEndpoint = "/api/email";

  const textSuccess =
    lang === "en"
      ? "Your message was successfully sent."
      : "Ваше повідомлення було успішно відправлено.";
  const textError =
    lang === "en"
      ? "Something went wrong. Please try again later."
      : "Щось пішло не так. Будь ласка, повторіть спробу пізніше.";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("response:", response);

      toast.success(textSuccess);
    })
    .catch((err) => {
      console.log("response with error: ", err);

      toast.error(textError);
    });
};
