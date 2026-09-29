import { combine, createEvent, createStore } from 'effector';
import type { IContact } from '../contact.types';

export const $contacts = createStore<IContact[]>([]);
export const setContacts = createEvent<IContact[]>();
$contacts.on(setContacts, (_, payload) => payload);

export const $selectedContactId = createStore<number | null>(null);
export const selectContactId = createEvent<number>();
$selectedContactId.on(selectContactId, (_, payload) => payload);

export const $selectedContact = combine(
  { contacts: $contacts, selectedContactId: $selectedContactId },
  ({ contacts, selectedContactId }) => {
    return contacts.find((contact) => contact.id === selectedContactId) ?? null;
  },
);
export const $hasSelectedContact = $selectedContact.map(Boolean);
