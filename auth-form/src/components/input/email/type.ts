import { FormValues } from "@/pages/signin/type";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface EmailData {
  register: UseFormRegister<FormValues>;
  error?: FieldError;
}