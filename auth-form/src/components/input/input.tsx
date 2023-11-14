import {
  FieldError,
  UseFormRegister,
} from 'node_modules/react-hook-form/dist/types';

import { FormValues } from '../login/type';
import style from './input.module.scss';

interface InputFields {
  label: string;
  id: 'email' | 'password' | 'confirm';
  placeholder: string;
  register: UseFormRegister<FormValues>;
  error?: FieldError;
}

export function MyInput(props: InputFields) {
  const { label, id, placeholder, error, register } = props;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type='text'
        placeholder={placeholder}
        {...register(id)}
        className={style.input}
      />
      <span className={style.error}>{error?.message}</span>
    </>
  );
}
