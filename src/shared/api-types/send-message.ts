import type { ICredentialsDto } from './credentials';

export interface ISendTextMessageParamsDto extends ICredentialsDto {
  chatId: string;
  message: string;
  typingTime?: number;
  quotedMessageId?: string;
}

export interface ISendTextMessageDto {
  idMessage: string;
}
