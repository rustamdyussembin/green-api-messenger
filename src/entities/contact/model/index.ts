import { combine, createEvent, createStore } from 'effector';
import type { IContact } from '../contact.types';

export const $contacts = createStore<IContact[]>([]);
export const setContacts = createEvent<IContact[]>();
$contacts.on(setContacts, (_, payload) => payload);

export const $selectedContactPhoneNumber = createStore<string | null>(null);
export const selectContactPhoneNumber = createEvent<string>();
$selectedContactPhoneNumber.on(selectContactPhoneNumber, (_, payload) => payload);

export const $selectedContact = combine(
  { contacts: $contacts, selectedContactId: $selectedContactPhoneNumber },
  ({ contacts, selectedContactId }) => {
    return contacts.find((contact) => contact.phoneNumber === selectedContactId) ?? null;
  },
);
export const $hasSelectedContact = $selectedContact.map(Boolean);
