import { useEffect, type FC } from 'react';
import { Box, Flex } from '@mantine/core';
import { useUnit } from 'effector-react';
import { MessageForm } from '../message-form/message-form';
import { sendTextMessage, sendTextMessageFx, startReceiving } from '../../model';
import { MessagesList } from '../messages-list/messages-list';

export const ChatWindow: FC = () => {
  const onSendMessage = useUnit(sendTextMessage);
  const pending = useUnit(sendTextMessageFx.pending);
  const onStartReceiving = useUnit(startReceiving);

  useEffect(() => {
    onStartReceiving();
  }, []);

  return (
    <Flex direction="column" flex={1} mih={0} p="md">
      <MessagesList />
      <Box w="100%" maw={700} mx="auto">
        <MessageForm pending={pending} onSubmit={onSendMessage} />
      </Box>
    </Flex>
  );
};
