import { goToPage } from '@/shared/libs/navigation';
import { createEffect, sample } from 'effector';
import type { INavigateParams } from '@/shared/types';
import { router } from '../providers/router/router';

const goToPageFx = createEffect(async ({ path, replace }: INavigateParams) => {
  await router.navigate(path, { replace });
});

sample({
  clock: goToPage,
  target: goToPageFx,
});
