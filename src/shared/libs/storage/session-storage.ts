export const sessionStorageService = {
  get: (key: string) => {
    return sessionStorage.getItem(key);
  },

  set: (key: string, value: string) => {
    sessionStorage.setItem(key, value);
  },

  remove: (key: string) => {
    sessionStorage.removeItem(key);
  },
};
