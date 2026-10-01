import type { ICredentialsDto } from '@/shared/api-types';

export interface ILoginFormProps {
  onSubmit: (data: ICredentialsDto) => void;
}

export type ILoginForm = ICredentialsDto;
