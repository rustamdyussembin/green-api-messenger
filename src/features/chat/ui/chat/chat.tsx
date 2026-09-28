import type { FC } from 'react';
import { AddMessage } from '../add-message/add-message';
import { Box, Flex } from '@mantine/core';
import { useUnit } from 'effector-react';
import { $selectedContact } from '@/entities/contact';

export const Chat: FC = () => {
  const selectedContact = useUnit($selectedContact);

  return (
    <Flex direction="column" flex={1} mih={0} p="md">
      <Box flex={1} mih={0}>
        Сообщения {selectedContact?.phone}
      </Box>
      <Box w="100%" maw={700} mx="auto">
        <AddMessage onSubmit={() => null} />
      </Box>
    </Flex>
  );
};
