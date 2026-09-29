import type { IChat } from '../../chat.types';

export interface IAddMessageFormProps {
  pending: boolean;
  onSubmit: (data: IChat) => void;
}

export type IAddMessageForm = IChat;
