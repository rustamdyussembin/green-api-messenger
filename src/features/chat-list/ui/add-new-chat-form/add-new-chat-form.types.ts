import type { IAddNewChat } from '../../chat-list.types';

export interface IAddNewChatFormProps {
  pending: boolean;
  onSubmit: (data: IAddNewChat) => void;
}

export type IAddNewChatForm = IAddNewChat;
