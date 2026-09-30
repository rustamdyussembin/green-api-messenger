import { del, get } from '@/shared/api';
import type {
  ICredentialsDto,
  IDeleteNotificationDto,
  IDeleteNotificationParamsDto,
  IReceiveNotificationDto,
} from '@/shared/api-types';

export const RECEIVE_NOTIFICATION_API_URL = (idInstance: string, apiTokenInstance: string) =>
  `/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`;
export const DELETE_NOTIFICATION_API_URL = (idInstance: string, apiTokenInstance: string, receiptId: number) =>
  `/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`;

export const receiveNotification = async ({
  idInstance,
  apiTokenInstance,
}: ICredentialsDto): Promise<IReceiveNotificationDto> => {
  return get(RECEIVE_NOTIFICATION_API_URL(idInstance, apiTokenInstance), { receiveTimeout: 5 });
};

export const deleteNotification = async ({
  idInstance,
  apiTokenInstance,
  receiptId,
}: IDeleteNotificationParamsDto): Promise<IDeleteNotificationDto> => {
  return del(DELETE_NOTIFICATION_API_URL(idInstance, apiTokenInstance, receiptId));
};
