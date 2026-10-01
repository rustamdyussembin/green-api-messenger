import { createBrowserRouter } from 'react-router';
import { routes } from '@/shared/constants';
import { LoginPage } from '@/pages/login';
import { MainPage } from '@/pages/main';
import { createGuardLoader } from '@/shared/libs/guards';
import { checkAuthFx } from '@/entities/auth';

const requireAuthLoader = createGuardLoader({
  check: () => checkAuthFx(),
  redirectTo: routes.login,
});

export const router = createBrowserRouter([
  {
    path: routes.login,
    Component: LoginPage,
  },
  {
    loader: requireAuthLoader,
    path: routes.main,
    Component: MainPage,
  },
]);
