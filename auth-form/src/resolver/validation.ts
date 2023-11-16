import { ErrorsEmail, ErrorsForm, FormValues } from "@/pages/signin/type";
import { ErrorsType, errorsText } from "@/manager/errors/errors";
import { generateError } from "@/manager/errors/generateErrors";
import { Pattern } from "@/manager/pattern/pattern";

const validateEmail = (email: string) => {
  let errors = {} as ErrorsEmail;

  if (!RegExp(Pattern.email).test(email)) {
    errors = generateError(ErrorsType.PATTERN, errorsText.invalidEmail);
  }

  if (!email.trim()) {
    errors = generateError(ErrorsType.REQUIRED, errorsText.email);
  }

  return errors;
}

export const handleErrorSignIn = (values: FormValues) => {
  const errors = {} as ErrorsForm;

  const emailErrors = validateEmail(values.email);

  if(Object.keys(emailErrors).length) {
    errors.email = emailErrors;
    console.log(errors);
  }
    console.log(errors);
  if (!values.password.trim()) {
    errors.password = generateError(ErrorsType.REQUIRED, errorsText.password);
  }

  return errors;
};

export const handleErrorSignUp = (values: FormValues) => {
  const errors = {} as ErrorsForm;

  errors.email = validateEmail(values.email);

  if (!values.password.trim()) {
    errors.password = generateError(ErrorsType.REQUIRED, errorsText.password);
  }

  if (!RegExp(Pattern.password).test(values.password)) {
    errors.password = generateError(
      ErrorsType.PATTERN,
      errorsText.invalidPasswordSignUp
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