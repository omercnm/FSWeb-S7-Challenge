import * as yup from "yup";
import { userSchema } from "./UserValidation";

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .required("Bu alan boş bırakılamaz")
    .min(2, "İsminiz çok kısa"),
  email: yup
    .string()
    .email()
    .required("Bu alan zorunludur"),
});
