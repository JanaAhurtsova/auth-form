import { signOut } from 'firebase/auth';

import { auth } from '@/firebase/firebase';
import style from './popup.module.scss';

export function Popup ( {email}: {email: string | null} ) {
  const logOut = () => {
    signOut(auth);
  }

  return (
    <div className={style.popup}>
      Hello, {email}!
      <button type='button' onClick={logOut}>Sign Out</button>
    </div>
  )
}