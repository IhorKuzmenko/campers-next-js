import * as yup from "yup";

export const bookingSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Please enter your name.")
    .matches(/^[A-Za-z\s'-]+$/, "Invalid name."),

  email: yup
    .string()
    .trim()
    .required("Please enter your email.")
    .email("Invalid email."),
});
