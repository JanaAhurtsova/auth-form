import { Resolver } from 'react-hook-form';
import { FormValues } from '@/components/login/type';
import { handleErrorLogin } from './validation';

export const resolver: Resolver<FormValues> = async (values) => ({
    values,
    errors: handleErrorLogin(values),
  });
