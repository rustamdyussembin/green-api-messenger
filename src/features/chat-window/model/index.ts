import { attach, createStore, createEvent, createEffect, sample } from 'effector';

import { sendTextMessageBaseFx } from '@/entities/send-message';
import type { ISendMessage, IMessage } from '../chat-window.types';
import { $selectedContact, type IContact } from '@/entities/contact';
import { deleteNotificationBaseFx, receiveNotificationBaseFx } from '@/entities/notification';
import type { ICredentialsDto } from '@/shared/api-types';
import { $credentials } from '@/entities/auth';

export const $messages = createStore<IMessage[]>([]);
export const messageAdded = createEvent<IMessage>();
$messages.on(messageAdded, (messages, message) => {
  if (messages.some((m) => m.id === message.id)) {
    return messages;
  }

  return [...messages, message];
});

export const sendTextMessageFx = attach({ effect: sendTextMessageBaseFx });

export const sendTextMessage = createEvent<ISendMessage>();

sample({
  clock: sendTextMessage,
  source: { credentials: $credentials, selectedContact: $selectedContact },
  filter: (sources: {
    credentials: null | ICredentialsDto;
    selectedContact: IContact | null;
  }): sources is { credentials: ICredentialsDto; selectedContact: IContact } =>
    Boolean(sources.credentials) && Boolean(sources.selectedContact),
  fn: ({ credentials, selectedContact }, { message }) => ({
    chatId: selectedContact.chatId,
    message,
    idInstance: credentials.idInstance,
    apiTokenInstance: credentials.apiTokenInstance,
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
  source: $credentials,
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
  source: $credentials,
  filter: Boolean,
  target: pollOnceFx,
});
