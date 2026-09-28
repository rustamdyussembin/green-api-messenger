import { Button, Group, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { FIELD_REQUIRED_MESSAGE } from '@/shared/constants';
import type { FC } from 'react';
import type { ILoginForm, ILoginFormProps } from './login-form.types';

export const LoginForm: FC<ILoginFormProps> = ({ onSubmit }) => {
  const form = useForm<ILoginForm>({
    mode: 'uncontrolled',
    initialValues: {
      idInstance: '',
      apiTokenInstance: '',
    },

    validate: {
      idInstance: isNotEmpty(FIELD_REQUIRED_MESSAGE),
      apiTokenInstance: isNotEmpty(FIELD_REQUIRED_MESSAGE),
    },
  });

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <TextInput withAsterisk label="ID Instance" key={form.key('idInstance')} {...form.getInputProps('idInstance')} />

      <TextInput
        withAsterisk
        label="Api Token Instance"
        key={form.key('apiTokenInstance')}
        {...form.getInputProps('apiTokenInstance')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Отправить</Button>
      </Group>
    </form>
  );
};
