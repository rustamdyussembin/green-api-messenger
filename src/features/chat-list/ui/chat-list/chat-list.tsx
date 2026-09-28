import type { FC } from 'react';
import { Card, Stack, Title } from '@mantine/core';
import { useUnit } from 'effector-react';
import { $contacts, selectContactId } from '@/entities/contact';
import { ChatListItem } from '../chat-list-item/chat-list-item';
import { AddNewChat } from '../add-new-chat/add-new-chat';
import classes from './chat-list.module.css';

export const ChatList: FC = () => {
  const contacts = useUnit($contacts);
  const onSelectContact = useUnit(selectContactId);

  return (
    <Card w={400} shadow="xs" p="lg" pos="relative">
      <Title order={1} size="h4" mb="xs">
        Список контактов
      </Title>
      <Stack mt="xl" className={classes.chatList}>
        {contacts.map((contact) => (
          <ChatListItem key={contact.id} contact={contact} onSelect={onSelectContact} />
        ))}
      </Stack>
      <AddNewChat />
    </Card>
  );
};
