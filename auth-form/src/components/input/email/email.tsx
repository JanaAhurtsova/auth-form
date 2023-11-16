import { MdOutlineEmail } from 'react-icons/md';
import style from '../input.module.scss';
import { EmailData } from './type';

export function Email({ error, register }: EmailData) {
  return (
    <>
      <label htmlFor="email">Email:</label>
      <div className={style.wrapper}>
        <input
          id="email"
          placeholder="Enter your email"
          {...register('email')}
          className={style.input}
        />
        <MdOutlineEmail fill="#666" className={style.icon} />
      </div>
      <div className={style.error}>
        {error && <h5 className={style.error_text}>{error.message}</h5>}
      </div>
    </>
  );
}