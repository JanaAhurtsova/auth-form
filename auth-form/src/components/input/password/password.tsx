import { useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import { IoMdEyeOff } from 'react-icons/io';
import { FaEye, FaLock } from 'react-icons/fa';
import { FormValues } from '../../../pages/signin/type';
import style from '../input.module.scss';

interface InputFields {
  label: string;
  id: 'password' | 'confirm';
  placeholder: string;
  register: UseFormRegister<FormValues>;
  error?: FieldError;
}

export function Password(props: InputFields) {
  const { label, id, placeholder, error, register } = props;
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className={style.wrapper}>
        <input
          id={id}
          type={passwordShown ? 'text' : 'password'}
          placeholder={placeholder}
          {...register(id)}
          className={style.input}
        />
        <div className={style.icon}>
          <FaLock fill="#666" />
        </div>
        <button
          type="button"
          className={style.eye}
          onClick={() => setPasswordShown(!passwordShown)}
        >
          {passwordShown ? <FaEye fill="#666" /> : <IoMdEyeOff fill="#666" />}
        </button>
      </div>
      <div className={style.error}>
        {error && <h5 className={style.error_text}>{error.message}</h5>}
      </div>
    </div>
  );
}
