import { attach, createEvent, createStore, sample } from 'effector';
import type { INavigateParams } from '@/shared/types';
import { routes } from '@/shared/constants';
import { goToPage } from '@/shared/libs/navigation';
import type { ICredentialsDto } from '@/shared/api-types';

export const $credentials = createStore<null | ICredentialsDto>(null);
export const setCredentials = createEvent<ICredentialsDto>();
export const submitCredentials = createEvent<ICredentialsDto>();
$credentials.on(setCredentials, (_, payload) => payload);
export const $hasCredentials = $credentials.map(Boolean);

sample({
  clock: submitCredentials,
  target: setCredentials,
});

sample({
  clock: submitCredentials,
  fn: (): INavigateParams => ({
    path: routes.main,
    replace: true,
  }),
  target: goToPage,
});

export const checkAuthFx = attach({ source: $hasCredentials, effect: (isAuthenticated) => isAuthenticated });
