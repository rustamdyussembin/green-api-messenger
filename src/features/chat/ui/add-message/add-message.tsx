import type { FC } from 'react';
import type { IAddMessageProps, IChatForm } from './add-message.types';
import { useForm } from '@mantine/form';
import { ActionIcon, TextInput } from '@mantine/core';
import { Send } from 'lucide-react';

export const AddMessage: FC<IAddMessageProps> = ({ onSubmit }) => {
  const form = useForm<IChatForm>({
    mode: 'uncontrolled',
    initialValues: {
      message: '',
    },
  });
  const message = form.useWatchValue('message');
  console.log('message', message);

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <TextInput
        radius="xl"
        size="md"
        key={form.key('message')}
        {...form.getInputProps('message')}
        rightSectionWidth={48}
        rightSection={
          <ActionIcon size="md" radius="xl" variant="filled" aria-label="Отправить" disabled={!message}>
            <Send size={14} />
          </ActionIcon>
        }
      />
    </form>
  );
};
