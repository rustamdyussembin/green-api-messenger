import type { IAddNewChat } from '../../chat-list.types';

export interface IAddNewChatFormProps {
  onSubmit: (data: IAddNewChat) => void;
}

export type IAddNewChatForm = IAddNewChat;
