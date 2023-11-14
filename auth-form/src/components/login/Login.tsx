import { SubmitHandler, useForm } from 'react-hook-form';
import { MyInput } from '../input/input';
import style from './loginForm.module.scss';
import { FormValues } from './type';
import { resolver } from '@/resolver/resolverLogin';

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div className={style.container}>
      <h1>Login</h1>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <MyInput
          label="Email:"
          id="email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
        />
        <MyInput
          label="Password:"
          id="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
        />
        <input className={style.submit} type="submit" value="Login" />
      </form>
    </div>
  );
}
