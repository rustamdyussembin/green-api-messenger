export interface ISendTextMessageParamsDto {
  idInstance: string;
  apiTokenInstance: string;
  chatId: string;
  message: string;
  typingTime?: number;
  quotedMessageId?: string;
}

export interface ISendTextMessageDto {
  idMessage: string;
}
