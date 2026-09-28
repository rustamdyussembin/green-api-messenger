import { ActionIcon, Modal } from '@mantine/core';
import type { FC } from 'react';
import { Pencil } from 'lucide-react';
import { AddNewChatForm } from '../add-new-chat-form/add-new-chat-form';
import { useUnit } from 'effector-react';
import { $isAddNewChatModal, addNewContact, closeAddNewChatModal, openAddNewChatModal } from '../../model';

export const AddNewChat: FC = () => {
  const onAddNewContact = useUnit(addNewContact);
  const [opened, open, close] = useUnit([$isAddNewChatModal, openAddNewChatModal, closeAddNewChatModal]);

  return (
    <>
      <ActionIcon
        size={40}
        radius="xl"
        color="blue"
        aria-label="Добавить контакт"
        pos="absolute"
        bottom={20}
        right={20}
        onClick={open}
      >
        <Pencil width={20} />
      </ActionIcon>

      <Modal opened={opened} onClose={close} title="Добавьте контакт">
        <AddNewChatForm onSubmit={onAddNewContact} />
      </Modal>
    </>
  );
};
