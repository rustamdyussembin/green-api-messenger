import type { FC } from 'react';
import { useForm } from '@mantine/form';
import { ActionIcon, TextInput } from '@mantine/core';
import { Send } from 'lucide-react';
import type { IAddMessageForm, IAddMessageFormProps } from './add-message-form.types';

export const AddMessageForm: FC<IAddMessageFormProps> = ({ pending, onSubmit }) => {
  const form = useForm<IAddMessageForm>({
    mode: 'uncontrolled',
    initialValues: {
      message: '',
    },
  });
  const message = form.useWatchValue('message');

  const handleSubmit = (values: IAddMessageForm) => {
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
