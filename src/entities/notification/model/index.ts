import { deleteNotification, receiveNotification } from '../notification.api.ts';
import { createEffect } from 'effector';
import type { ICredentialsDto } from '@/shared/api-types';
import type { IReceiveNotification, IDeleteNotification, IDeleteNotificationParams } from '../notification.types';

export const receiveNotificationBaseFx = createEffect<ICredentialsDto, IReceiveNotification | null>();
receiveNotificationBaseFx.use(receiveNotification);

export const deleteNotificationBaseFx = createEffect<IDeleteNotificationParams, IDeleteNotification>();
deleteNotificationBaseFx.use(deleteNotification);
