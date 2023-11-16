import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import { Email } from '@/components/input/email/email';
import { Password } from '@/components/input/password/password';
import { resolver } from '@/resolver/resolverSignUp';
import { auth, db } from '@/firebase/firebase';
import { errorsText } from '@/manager/errors/errors';
import style from '../auth.module.scss';
import { FormValues } from '../signin/type';

export function SignUp() {
    const [errorServer, setErrorServer] = useState('');
    const navigate = useNavigate();

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
      createUserWithEmailAndPassword(auth, userForm.email, userForm.password)
        .then((userCredential) => {
          const { user } = userCredential;
          addDoc(collection(db, 'users'), {
            uid: user.uid,
            authProvider: 'local',
            email: user.email,
          });
          navigate('/');
          setErrorServer('');
        })
        .catch(() => {
          setErrorServer(errorsText.signUpError);
        });
    });

    return (
      <div className={style.container}>
        {errorServer && <div className={style.server}>{errorServer}</div>}
        <h1>Sign Up</h1>
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