import type { ICredentialsDto } from './credentials';

export interface ISendTextMessageParamsDto extends ICredentialsDto {
  message: string;
  typingTime?: number;
  quotedMessageId?: string;
}

export interface ISendTextMessageDto {
  idMessage: string;
}
