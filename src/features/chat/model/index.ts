import { attach, createEvent, sample } from 'effector';
import { sendTextMessageBaseFx } from '@/entities/send-message';
import { $loginData } from '@/entities/auth';
import type { IChat } from '../chat.types';
import { $selectedContact, type IContact } from '@/entities/contact';
import type { ILogin } from '@/entities/auth/auth.types.ts';

export const sendTextMessageFx = attach({ effect: sendTextMessageBaseFx });

export const sendTextMessage = createEvent<IChat>();

sample({
  clock: sendTextMessage,
  source: { loginData: $loginData, selectedContact: $selectedContact },
  filter: (sources: {
    loginData: null | ILogin;
    selectedContact: IContact | null;
  }): sources is { loginData: ILogin; selectedContact: IContact } =>
    Boolean(sources.loginData) && Boolean(sources.selectedContact),
  fn: ({ loginData, selectedContact }, { message }) => ({
    chatId: selectedContact.chatId,
    message,
    idInstance: loginData.idInstance,
    apiTokenInstance: loginData.apiTokenInstance,
  }),
  target: sendTextMessageFx,
});
