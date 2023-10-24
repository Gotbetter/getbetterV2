import APIResponseType from 'types/api';
import { PlanCreateResponseType } from 'types/plan';

import client from './client';

const createPlan = (participant_id: number): Promise<APIResponseType<PlanCreateResponseType>> =>
  client.post('/plans', { participant_id });

export { createPlan };
