import { attach, createEvent, sample } from 'effector';
import { sendTextMessageBaseFx } from '@/entities/send-message';
import { $loginData } from '@/entities/auth';
import type { IChat } from '../chat.types';

export const sendTextMessageFx = attach({ effect: sendTextMessageBaseFx });

export const sendTextMessage = createEvent<IChat>();

sample({
  clock: sendTextMessage,
  source: $loginData,
  filter: Boolean,
  fn: ({ idInstance, apiTokenInstance }, { message }) => ({
    chatId: '10000000',
    message,
    idInstance,
    apiTokenInstance,
  }),
  target: sendTextMessageFx,
});
