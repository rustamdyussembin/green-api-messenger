import { sessionStorageService } from '@/shared/libs/storage';
import { INSTANCE_KEY } from '../green-api.constants';

export const credentialsService = {
  get: () => sessionStorageService.get(INSTANCE_KEY),

  set: (token: string) => {
    sessionStorageService.set(INSTANCE_KEY, token);
  },

  remove: () => {
    sessionStorageService.remove(INSTANCE_KEY);
  },

  hasCredentials: () => {
    return Boolean(sessionStorageService.get(INSTANCE_KEY));
  },
};
