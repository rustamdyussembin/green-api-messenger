import type { ILogin } from '@/entities/auth/auth.types';

export interface ILoginFormProps {
  onSubmit: (data: ILogin) => void;
}

export type ILoginForm = ILogin;
