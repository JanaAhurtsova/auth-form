import { Resolver } from 'react-hook-form';
import { FormValues } from '@/components/login/type';
import { handleErrorRegister } from './validation';

export const resolver: Resolver<FormValues> = async (values) => ({
    values,
    errors: handleErrorRegister(values),
});
