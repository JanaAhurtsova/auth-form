import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Email } from '@/components/input/email/email';
import { Password } from '@/components/input/password/password';
import { resolver } from '@/resolver/resolverSignUp';
import { registerWithEmailAndPassword } from '@/firebase/firebase';
import style from '../auth.module.scss';
import { FormValues } from '../signin/type';

export function SignUp() {
    const [errorServer, setErrorServer] = useState('');
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm<FormValues>({
      resolver,
      mode: 'onSubmit',
      reValidateMode: 'onSubmit',
    });

    const onSubmit = handleSubmit((userForm) => {
      console.log(userForm)
      try {
        registerWithEmailAndPassword(userForm.email, userForm.password);
        setErrorServer('');
        alert('Success!');
      } catch (error) {
        setErrorServer('Invalid email or password');
      }
    });

    return (
      <div className={style.container}>
        {errorServer ? <span>{errorServer}</span> : ''}
        <h1>Sign Up</h1>
        <h4 className={style.subtitle}>Sign in with your email and password</h4>
        <form className={style.form} onSubmit={onSubmit}>
          <Email register={register} error={errors.email} />
          <Password
            label="Password:"
            id="password"
            placeholder="Enter your password"
            register={register}
            error={errors.password}
          />
          <Password
            label="Confirm:"
            id="confirm"
            placeholder="Confirm your password"
            register={register}
            error={errors.confirm}
          />
          <input className={style.submit} type="submit" value="Sign Up" />
        </form>
        <p className={style.account}>
          Already have an account? <Link to="/">SIGN IN NOW</Link>
        </p>
      </div>
    );
}