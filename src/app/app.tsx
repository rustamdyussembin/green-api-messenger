import { RouterProvider } from 'react-router/dom';
import { router } from './providers/router/router';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './app.css';
import './model';

export const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};
