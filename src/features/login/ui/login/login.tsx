import type { FC } from 'react';
import { Center, Paper, Title } from '@mantine/core';
import { LoginForm } from '../login-form/login-form';
import { useUnit } from 'effector-react';
import { startSetLoginData } from '@/entities/auth';

export const Login: FC = () => {
  const onSubmit = useUnit(startSetLoginData);

  return (
    <Center mih="100dvh" p="md">
      <Paper shadow="xs" p="xl">
        <Title order={1} size="h4">
          Для входа в систему введите данные
        </Title>

        <LoginForm onSubmit={onSubmit} />
      </Paper>
    </Center>
  );
};
