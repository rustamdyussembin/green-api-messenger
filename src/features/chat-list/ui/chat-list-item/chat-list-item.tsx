import type { FC } from 'react';
import type { IChatListItemProps } from './chat-list-item.types';
import { Avatar, Group, Stack, UnstyledButton, Text } from '@mantine/core';

export const ChatListItem: FC<IChatListItemProps> = ({ contact, onSelect }) => {
  return (
    <UnstyledButton onClick={() => onSelect(contact.phoneNumber)}>
      <Group wrap="nowrap" align="center" display="flex">
        <Avatar src={contact.avatarSrc} size={40} radius="xl" />
        <Stack gap={2}>
          <Text fw={600}>{contact.phoneNumber}</Text>
        </Stack>
      </Group>
    </UnstyledButton>
  );
};
