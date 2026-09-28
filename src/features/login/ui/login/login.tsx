import type { FC } from 'react';
import { Card, Center, Title } from '@mantine/core';
import { LoginForm } from '../login-form/login-form';
import { useUnit } from 'effector-react';
import { startSetLoginData } from '@/entities/auth';

export const Login: FC = () => {
  const onSubmit = useUnit(startSetLoginData);

  return (
    <Center mih="100dvh" p="md">
      <Card shadow="xs" p="xl">
        <Title order={1} size="h4">
          Для входа введите данные
        </Title>

        <LoginForm onSubmit={onSubmit} />
      </Card>
    </Center>
  );
};
