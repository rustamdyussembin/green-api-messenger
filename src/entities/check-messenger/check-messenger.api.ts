import { post } from '@/shared/api';
import type { ICheckWhatsappDto, ICheckWhatsappParamsDto } from '@/shared/api-types';

export const CHECK_WHATSAPP_API_URL = (idInstance: string, apiTokenInstance: string) =>
  `/waInstance${idInstance}/checkWhatsapp/${apiTokenInstance}`;

export async function checkWhatsapp({
  idInstance,
  apiTokenInstance,
  ...data
}: ICheckWhatsappParamsDto): Promise<ICheckWhatsappDto> {
  return post(CHECK_WHATSAPP_API_URL(idInstance, apiTokenInstance), data);
}
