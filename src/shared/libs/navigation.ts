import { createEvent } from 'effector';
import type { INavigateParams } from '@/shared/types';

export const goToPage = createEvent<INavigateParams>();
