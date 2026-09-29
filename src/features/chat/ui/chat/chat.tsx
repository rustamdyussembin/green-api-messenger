import type { FC } from 'react';
import { Box, Flex } from '@mantine/core';
import { useUnit } from 'effector-react';
import { $selectedContact } from '@/entities/contact';
import { AddMessageForm } from '../add-message-form/add-message-form';
import { sendTextMessage, sendTextMessageFx } from '../../model';

export const Chat: FC = () => {
  const selectedContact = useUnit($selectedContact);
  const onSendMessage = useUnit(sendTextMessage);
  const pending = useUnit(sendTextMessageFx.pending);

  return (
    <Flex direction="column" flex={1} mih={0} p="md">
      <Box flex={1} mih={0}>
        Сообщения {selectedContact?.phoneNumber}
      </Box>
      <Box w="100%" maw={700} mx="auto">
        <AddMessageForm pending={pending} onSubmit={onSendMessage} />
      </Box>
    </Flex>
  );
};
