export interface ISendMessage {
  message: string;
}

type MessageDirection = 'incoming' | 'outgoing';

export interface IMessage {
  id: string;
  chatId: string;
  text: string;
  direction: MessageDirection;
  createdAt: number;
}
