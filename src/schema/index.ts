import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().min(3).required("This field is required"),
  email: yup.string().email().required("This field is required"),
  password: yup.string().min(8).required("This field is required"),
});

export const signInSchema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  password: yup.string().min(8).required("This field is required"),
});
