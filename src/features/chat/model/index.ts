import { attach, createStore, createEvent, createEffect, sample } from 'effector';

import { sendTextMessageBaseFx } from '@/entities/send-message';
import { $loginData, type ILogin } from '@/entities/auth';
import type { IChat, IMessage } from '../chat.types';
import { $selectedContact, type IContact } from '@/entities/contact';
import { deleteNotificationBaseFx, receiveNotificationBaseFx } from '@/entities/notification';
import type { ICredentialsDto } from '@/shared/api-types';

export const $messages = createStore<IMessage[]>([]);
export const messageAdded = createEvent<IMessage>();
$messages.on(messageAdded, (messages, message) => {
  if (messages.some((m) => m.id === message.id)) {
    return messages;
  }

  return [...messages, message];
});

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

sample({
  clock: sendTextMessageFx.done,
  fn: ({ params, result }): IMessage => ({
    id: result.idMessage,
    chatId: params.chatId,
    text: params.message,
    direction: 'outgoing',
    createdAt: Date.now(),
  }),

  target: messageAdded,
});

export const receiveNotificationFx = attach({ effect: receiveNotificationBaseFx });
export const deleteNotificationFx = attach({ effect: deleteNotificationBaseFx });

export const startReceiving = createEvent();

export const pollOnceFx = createEffect<ICredentialsDto, { message: IMessage | null }>();
pollOnceFx.use(async (credentials) => {
  const notification = await receiveNotificationFx(credentials);

  if (!notification) {
    return { message: null };
  }

  const { body, receiptId } = notification;

  let message: IMessage | null = null;

  if (body?.typeWebhook === 'incomingMessageReceived' && body?.messageData?.typeMessage === 'textMessage') {
    message = {
      id: body.idMessage,
      chatId: body.senderData.chatId,
      text: body.messageData.textMessageData.textMessage,
      createdAt: body.timestamp,
      direction: 'incoming',
    };
  }

  await deleteNotificationFx({ ...credentials, receiptId });

  return { message };
});

sample({
  clock: startReceiving,
  source: $loginData,
  filter: Boolean,
  target: pollOnceFx,
});

sample({
  clock: pollOnceFx.doneData.map((result) => result.message ?? null),
  filter: Boolean,
  target: messageAdded,
});

sample({
  clock: pollOnceFx.doneData,
  source: $loginData,
  filter: Boolean,
  target: pollOnceFx,
});
