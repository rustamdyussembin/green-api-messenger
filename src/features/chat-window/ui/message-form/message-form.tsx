import type { FC } from 'react';
import { useForm } from '@mantine/form';
import { ActionIcon, TextInput } from '@mantine/core';
import { Send } from 'lucide-react';
import type { IMessageForm, IMessageFormProps } from './message-form.types';

export const MessageForm: FC<IMessageFormProps> = ({ pending, onSubmit }) => {
  const form = useForm<IMessageForm>({
    mode: 'uncontrolled',
    initialValues: {
      message: '',
    },
  });
  const message = form.useWatchValue('message');

  const handleSubmit = (values: IMessageForm) => {
    onSubmit(values);

    form.reset();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        radius="xl"
        size="md"
        key={form.key('message')}
        {...form.getInputProps('message')}
        rightSectionWidth={48}
        rightSection={
          <ActionIcon
            type="submit"
            size="md"
            radius="xl"
            variant="filled"
            aria-label="Отправить"
            disabled={!message || pending}
            loading={pending}
          >
            <Send size={14} />
          </ActionIcon>
        }
      />
    </form>
  );
};
