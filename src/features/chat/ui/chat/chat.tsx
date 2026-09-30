import { useEffect, type FC } from 'react';
import { Box, Flex } from '@mantine/core';
import { useUnit } from 'effector-react';
import { AddMessageForm } from '../add-message-form/add-message-form';
import { sendTextMessage, sendTextMessageFx, startReceiving } from '../../model';
import { ChatMessages } from '../chat-messages/chat-messages';

export const Chat: FC = () => {
  const onSendMessage = useUnit(sendTextMessage);
  const pending = useUnit(sendTextMessageFx.pending);
  const onStartReceiving = useUnit(startReceiving);

  useEffect(() => {
    onStartReceiving();
  }, []);

  return (
    <Flex direction="column" flex={1} mih={0} p="md">
      <ChatMessages />
      <Box w="100%" maw={700} mx="auto">
        <AddMessageForm pending={pending} onSubmit={onSendMessage} />
      </Box>
    </Flex>
  );
};
