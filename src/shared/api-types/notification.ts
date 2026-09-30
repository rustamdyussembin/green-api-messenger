import type { ICredentialsDto } from './credentials';

export interface IReceiveNotificationDto {
  receiptId: number;
  body?: {
    idMessage: string;
    instanceData: {
      idInstance: number;
      typeInstance: string;
      wid: string;
    };
    messageData: {
      textMessageData: {
        textMessage: string;
      };
      typeMessage?: string;
    };
    senderData: {
      chatId: string;
      chatName: string;
      sender: string;
      senderContactName: string;
      senderName: string;
    };
    timestamp: number;
    typeWebhook: string;
  };
}

export interface IDeleteNotificationParamsDto extends ICredentialsDto {
  receiptId: number;
}

export interface IDeleteNotificationDto {
  result: boolean;
  reason: string;
}
