import type { FormData } from "@components/ContactForm";

export const sendEmail = (data: FormData) => {
  console.log("SUBMIT: ", JSON.stringify(data));

  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("response:", response);

      alert(response.message);
    })
    .catch((err) => {
      console.log("response with error: ", err);

      alert(err);
    });
};
