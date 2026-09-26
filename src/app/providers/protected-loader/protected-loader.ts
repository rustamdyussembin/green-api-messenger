import { redirect } from 'react-router';
import { credentialsService } from '@/entities/green-api';

export const protectedLoader = () => {
  if (!credentialsService.hasCredentials()) {
    return redirect('/login');
  }

  return null;
};
