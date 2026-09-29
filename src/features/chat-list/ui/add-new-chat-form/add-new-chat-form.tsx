import type { FC } from 'react';
import type { IAddNewChatForm, IAddNewChatFormProps } from './add-new-chat-form.types';
import { isNotEmpty, useForm } from '@mantine/form';
import { FIELD_REQUIRED_MESSAGE, PHONE_MASK } from '@/shared/constants';
import { Button, Group, MaskInput } from '@mantine/core';

export const AddNewChatForm: FC<IAddNewChatFormProps> = ({ onSubmit }) => {
  const form = useForm<IAddNewChatForm>({
    mode: 'uncontrolled',
    initialValues: {
      phoneNumber: '',
    },
    validate: {
      phoneNumber: isNotEmpty(FIELD_REQUIRED_MESSAGE),
    },
  });

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <MaskInput
        withAsterisk
        label="Номер телефона"
        mask={PHONE_MASK}
        onChangeRaw={(value) => form.setFieldValue('phoneNumber', value, { forceUpdate: false })}
        key={form.key('phoneNumber')}
        {...form.getInputProps('phoneNumber')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Добавить</Button>
      </Group>
    </form>
  );
};
