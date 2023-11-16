import { Resolver } from 'react-hook-form';
import { FormValues } from '@/pages/signin/type';
import { handleErrorSignUp } from './validation';

export const resolver: Resolver<FormValues> = async (values) => ({
    values,
    errors: handleErrorSignUp(values),
});
