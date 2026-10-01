import type { FC } from 'react';
import { Box, Flex } from '@mantine/core';
import { useUnit } from 'effector-react';
import { $messages } from '../../model';
import classes from './messages-list.module.css';

export const MessagesList: FC = () => {
  const messages = useUnit($messages);

  return (
    <Box flex={1} mih={0} className={classes.messagesList}>
      <Flex direction="column" justify="flex-end" gap="xs" mih="100%" py="md">
        {messages.map((message) => (
          <Flex key={message.id} justify={message.direction === 'outgoing' ? 'flex-end' : 'flex-start'}>
            <Box
              px="md"
              py="xs"
              maw="70%"
              style={{
                borderRadius: 12,
                background: message.direction === 'outgoing' ? '#d9fdd3' : '#ffffff',
              }}
            >
              {message.text}
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
