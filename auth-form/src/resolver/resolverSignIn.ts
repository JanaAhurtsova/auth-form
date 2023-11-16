import { Resolver } from 'react-hook-form';
import { FormValues } from '@/pages/signin/type';
import { handleErrorSignIn } from './validation';

export const resolver: Resolver<FormValues> = async (values) => ({
    values,
    errors: handleErrorSignIn(values),
  });
