import { redirect } from 'react-router';
import type { IGuardLoaderOptions } from '@/shared/types';

export const createGuardLoader = ({ check, redirectTo }: IGuardLoaderOptions) => {
  return async () => {
    const isAllowed = await check();

    if (!isAllowed) {
      throw redirect(redirectTo);
    }

    return null;
  };
};
