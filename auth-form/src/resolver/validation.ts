import { ErrorsEmail, ErrorsForm, FormValues } from "@/components/login/type";
import { ErrorsType, errorsText } from "@/manager/errors/errors";
import { generateError } from "@/manager/errors/generateErrors";
import { Pattern } from "@/manager/pattern/pattern";

const validateEmail = (email: string) => {
  let errors = {} as ErrorsEmail;

  if (!email.trim()) {
    errors = generateError(ErrorsType.REQUIRED, errorsText.email);
  }

  if (!RegExp(Pattern.email).test(email)) {
    errors = generateError(ErrorsType.PATTERN, errorsText.invalidEmail);
  }

  return errors;
}

export const handleErrorLogin = (values: FormValues) => {
  const errors = {} as ErrorsForm;

  errors.email = validateEmail(values.email);

  if (!values.password.trim()) {
    errors.password = generateError(ErrorsType.REQUIRED, errorsText.password);
  }

  return errors;
};

export const handleErrorRegister = (values: FormValues) => {
  const errors = {} as ErrorsForm;

  errors.email = validateEmail(values.email);

  if (!values.password.trim()) {
    errors.password = generateError(ErrorsType.REQUIRED, errorsText.password);
  }

  if (!RegExp(Pattern.password).test(values.password)) {
    errors.password = generateError(
      ErrorsType.PATTERN,
      errorsText.invalidPasswordRegistration
    );
  }

  if (!values.confirm) {
    errors.confirm = generateError(ErrorsType.REQUIRED, errorsText.confirm);
  }

  if (values.confirm !== values.password) {
    errors.confirm = generateError(ErrorsType.REQUIRED, errorsText.noConfirm);
  }

  return errors;
};