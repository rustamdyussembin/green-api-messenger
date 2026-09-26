import { createBrowserRouter } from 'react-router';

import { Main } from '@/pages/main';

import { routes } from '@/shared/constants';
import { Login } from '@/pages/login';
import { protectedLoader } from '../protected-loader/protected-loader';

export const router = createBrowserRouter([
  {
    path: routes.login,
    Component: Login,
  },
  {
    loader: protectedLoader,
    path: routes.main,
    Component: Main,
  },
]);
