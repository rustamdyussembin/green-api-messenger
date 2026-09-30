import { createEffect } from 'effector';
import { sendTextMessage } from '../send-message.api';
import type { ISendTextMessage, ISendTextMessageParams } from '../send-message.types';

export const sendTextMessageBaseFx = createEffect<ISendTextMessageParams, ISendTextMessage>();
sendTextMessageBaseFx.use(sendTextMessage);
