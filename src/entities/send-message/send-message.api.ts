import { post } from '@/shared/api';
import type { ISendTextMessageDto, ISendTextMessageParamsDto } from '@/shared/api-types';

export const SEND_TEXT_MESSAGE_API_URL = (idInstance: string, apiTokenInstance: string) =>
  `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;

export async function sendTextMessage({
  idInstance,
  apiTokenInstance,
  ...rest
}: ISendTextMessageParamsDto): Promise<ISendTextMessageDto> {
  return post(SEND_TEXT_MESSAGE_API_URL(idInstance, apiTokenInstance), rest);
}
