import { attach, createEvent, createStore, sample } from 'effector';
import type { IAddNewChat } from '../chat-list.types';
import { $contacts, type IContact, setContacts } from '@/entities/contact';
import { $loginData } from '@/entities/auth';
import { checkWhatsappBaseFx, type ICheckWhatsappParams } from '@/entities/check-messenger';
import { getChatId, getPhoneNumber } from '@/shared/libs/phone';

export const checkWhatsappFx = attach({ effect: checkWhatsappBaseFx });

export const $isAddNewChatModal = createStore(false);
export const openAddNewChatModal = createEvent();
export const closeAddNewChatModal = createEvent();
$isAddNewChatModal.on(openAddNewChatModal, () => true);
$isAddNewChatModal.on(closeAddNewChatModal, () => false);

export const addNewContact = createEvent<IAddNewChat>();

sample({
  clock: addNewContact,
  source: $loginData,
  filter: Boolean,
  fn: (loginData, { phoneNumber }): ICheckWhatsappParams => ({
    ...loginData,
    chatId: getChatId(phoneNumber),
  }),
  target: checkWhatsappFx,
});

sample({
  clock: checkWhatsappFx.doneData,
  source: $contacts,
  fn: (contacts, newContact): IContact[] => [
    { phoneNumber: getPhoneNumber(newContact.phoneNumber), chatId: newContact.chatId },
    ...contacts,
  ],
  target: [setContacts, closeAddNewChatModal],
});
