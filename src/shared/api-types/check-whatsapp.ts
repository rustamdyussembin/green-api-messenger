import type { ICredentialsDto } from './credentials';

export interface ICheckWhatsappParamsDto extends ICredentialsDto {
  chatId: string;
}

export interface ICheckWhatsappDto {
  existsWhatsapp: boolean;
  chatId: string;
  username: string;
  phoneNumber: string;
  fromCache: boolean;
}
