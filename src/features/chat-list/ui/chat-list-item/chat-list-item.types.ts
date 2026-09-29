import type { IContact } from '@/entities/contact';

export interface IChatListItemProps {
  contact: IContact;
  onSelect: (id: string) => void;
}
