import { createEffect } from 'effector';
import { checkWhatsapp } from '../check-messenger.api';
import type { ICheckWhatsapp, ICheckWhatsappParams } from '../check-messenger.types';

export const checkWhatsappBaseFx = createEffect<ICheckWhatsappParams, ICheckWhatsapp>();
checkWhatsappBaseFx.use(checkWhatsapp);
