import { ErrorType, FormValues } from '@/components/login/type';
import { ErrorsType, errorsText } from '@/manager/errors/errors';
import { Pattern } from '@/manager/pattern/pattern';
import { Resolver } from 'react-hook-form';

export const resolver: Resolver<FormValues> = async (values) => {
  const generateError = (type: 'required' | 'pattern', message: string) => ({
    type,
    message,
  });

  const handleError = (values: FormValues) => {
    const errors = {} as ErrorType;

    if (!values.email.trim()) {
      errors.email = generateError(ErrorsType.REQUIRED, errorsText.email);
    }

    if (!values.password.trim()) {
      errors.password = generateError(ErrorsType.REQUIRED, errorsText.password);
    }

    if(!RegExp(Pattern.email).test(values.email)) {
      errors.email = generateError(ErrorsType.PATTERN, errorsText.invalidEmail);
    }

    if(!values.confirm) {
      errors.confirm = generateError(
        ErrorsType.REQUIRED,
        errorsText.confirm
      );
    }

    if (values.confirm !== values.password) {
      errors.confirm = generateError(ErrorsType.REQUIRED, errorsText.noConfirm);
    }
    
    return errors;
  }

  return {
    values: values,
    errors: handleError(values),
  };
}