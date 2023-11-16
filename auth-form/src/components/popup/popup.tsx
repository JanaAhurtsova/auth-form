import { signOut } from 'firebase/auth';

import { auth } from '@/firebase/firebase';
import style from './popup.module.scss';
import { PopupData } from './type';

export function Popup ( {email, setSuccess}: PopupData ) {
  const logOut = () => {
    signOut(auth);
    setSuccess(false);
  }

  return (
    <div className={style.popup}>
      Hello, {email}!
      <button className={style.signout} type='button' onClick={logOut}>Sign Out</button>
    </div>
  )
}