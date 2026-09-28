import { createEvent, createStore, sample } from 'effector';
import type { IAddNewChat } from '../chat-list.types';
import { $contacts, type IContact, setContacts } from '@/entities/contact';

export const $isAddNewChatModal = createStore(false);
export const openAddNewChatModal = createEvent();
export const closeAddNewChatModal = createEvent();
$isAddNewChatModal.on(openAddNewChatModal, () => true);
$isAddNewChatModal.on(closeAddNewChatModal, () => false);

export const addNewContact = createEvent<IAddNewChat>();

sample({
  clock: addNewContact,
  source: $contacts,
  fn: (contacts, newContact): IContact[] => [...contacts, { id: contacts.length + 1, phone: newContact.phoneNumber }],
  target: [setContacts, closeAddNewChatModal],
});
