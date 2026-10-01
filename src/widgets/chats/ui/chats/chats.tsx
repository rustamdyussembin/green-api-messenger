import { Container, Flex, Text } from '@mantine/core';
import type { FC } from 'react';
import { ChatList } from '@/features/chat-list';
import { ChatWindow } from '@/features/chat-window';
import { useUnit } from 'effector-react';
import { $hasSelectedContact } from '@/entities/contact';

export const Chats: FC = () => {
  const hasSelectedContact = useUnit($hasSelectedContact);

  return (
    <Container fluid h="100vh">
      <Flex h="100%" py="xs" gap="md">
        <ChatList />
        {hasSelectedContact ? <ChatWindow /> : <Text>Выберите контакт</Text>}
      </Flex>
    </Container>
  );
};
