import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';

import { auth } from '@/firebase/firebase';
import { resolver } from '@/resolver/resolverSignIn';
import { Email } from '@/components/input/email/email';
import { Password } from '@/components/input/password/password';
import { Popup } from '@/components/popup/popup';
import { errorsText } from '@/manager/errors/errors';
import { FormValues } from './type';
import style from '../auth.module.scss';

export function SignIn() {
  const [errorServer, setErrorServer] = useState('');
  const [success, setSuccess ] = useState(false);
  const [ member, setMember ] = useState<string | null>('');

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
    signInWithEmailAndPassword(auth, userForm.email, userForm.password)
      .then((userCredential) => {
        const { user: { email } }= userCredential;
        setErrorServer('');
        setMember(email);
        setSuccess(true);
      })
      .catch(() => setErrorServer(errorsText.serverError));
    });

  return (
    <div className={style.container}>
      {errorServer && <div className={style.server}>{errorServer}</div>}
      <h1>Sign In</h1>
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
        <input className={style.submit} type="submit" value="Sign In" />
      </form>
      <p className={style.account}>
        Do not have an account? <Link to="/signup">SIGN UP NOW</Link>
      </p>
      {success && createPortal(<Popup email={member} />, document.getElementById('root')!)}
    </div>
  );
}
