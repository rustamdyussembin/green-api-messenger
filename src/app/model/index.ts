import { navigateRequested } from '@/shared/libs/navigation';
import { attach, createEffect, sample } from 'effector';
import { $hasLoginData } from '@/entities/auth';
import type { INavigateParams } from '@/shared/types';
import { router } from '../providers/router/router';

export const checkAuthFx = attach({ source: $hasLoginData, effect: (isAuthenticated) => isAuthenticated });

const navigateFx = createEffect(async ({ path, replace }: INavigateParams) => {
  await router.navigate(path, { replace });
});

sample({
  clock: navigateRequested,
  target: navigateFx,
});
