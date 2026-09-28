import type { FC } from 'react';
import { ChatList } from '@/features/chat-list';
import { Box, Container, Flex } from '@mantine/core';

export const Chats: FC = () => {
  return (
    <Container fluid h="100vh">
      <Flex h="100%" py="xs" gap="md">
        <ChatList />
        <Box flex={1}>qwe</Box>
      </Flex>
    </Container>
  );
};
