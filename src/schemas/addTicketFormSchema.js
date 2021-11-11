import * as Yup from "yup";

export const addTicketFormValidation = Yup.object().shape({
  subject: Yup.string().min(5).max(100).required(),
  details: Yup.string().min(5).max(200).required(),
  date: Yup.date().required(),
});
