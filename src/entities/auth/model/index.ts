import { createEvent, createStore, sample } from 'effector';
import type { ILogin } from '../auth.types';
import type { INavigateParams } from '@/shared/types';
import { routes } from '@/shared/constants';
import { navigateRequested } from '@/shared/libs/navigation';

export const $loginData = createStore<null | ILogin>(null);
export const setLoginData = createEvent<ILogin>();
export const startSetLoginData = createEvent<ILogin>();
$loginData.on(setLoginData, (_, payload) => payload);
export const $hasLoginData = $loginData.map(Boolean);

sample({
  clock: startSetLoginData,
  target: setLoginData,
});

sample({
  clock: startSetLoginData,
  fn: (): INavigateParams => ({
    path: routes.main,
    replace: true,
  }),
  target: navigateRequested,
});
