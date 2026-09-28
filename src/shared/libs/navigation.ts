import { createEvent } from 'effector';
import type { INavigateParams } from '@/shared/types';

export const navigateRequested = createEvent<INavigateParams>();
