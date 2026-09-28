import type { IChat } from '../../chat.types';

export interface IAddMessageProps {
  onSubmit: (data: IChat) => void;
}

export type IChatForm = IChat;
