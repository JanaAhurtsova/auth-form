import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

import { auth } from '@/firebase/firebase';
import { resolver } from '@/resolver/resolverSignIn';
import { Email } from '@/components/input/email/email';
import { Password } from '../../components/input/password/password';
import { FormValues } from './type';
import style from '../auth.module.scss';

export function SignIn() {
  const [errorServer, setErrorServer] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = handleSubmit((userForm) => {
    try {
      signInWithEmailAndPassword(auth, userForm.email, userForm.password);
      setErrorServer('');
      alert('Success!');
    } catch (error) {
      setErrorServer('Invalid email or password');
    }
  });

  return (
    <div className={style.container}>
      {errorServer ? <span>{errorServer}</span> : ''}
      <h1>Sign In</h1>
      <h4 className={style.subtitle}>Sign in with your email and password</h4>
      <form className={style.form} onSubmit={onSubmit}>
        <Email
          register={register}
          error={errors.email}
        />
        <Password
          label="Password:"
          id="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
        />
        <input
          className={style.submit}
          type="submit"
          value="Sign In"
        />
      </form>
      <p className={style.account}>Do not have an account? <Link to='/signup'>SIGN UP NOW</Link></p>
    </div>
  );
}
