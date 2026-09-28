export interface IGuardLoaderOptions {
  check: () => boolean | Promise<boolean>;
  redirectTo: string;
}
