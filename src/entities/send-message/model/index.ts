import { createEffect } from 'effector';
import { sendTextMessage } from '../send-message.api';
import type { ISendTextMessageParams } from '../send-message.types';

export const sendTextMessageBaseFx = createEffect<ISendTextMessageParams, any>();
sendTextMessageBaseFx.use(sendTextMessage);
