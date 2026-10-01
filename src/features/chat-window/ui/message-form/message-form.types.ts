import type { ISendMessage } from '../../chat-window.types';

export interface IMessageFormProps {
  pending: boolean;
  onSubmit: (data: ISendMessage) => void;
}

export type IMessageForm = ISendMessage;
