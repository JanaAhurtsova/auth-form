import { createBrowserRouter } from 'react-router-dom';

import { SignIn } from '@/pages/signin/signIn';
import { SignUp } from '@/pages/signup/signup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);
