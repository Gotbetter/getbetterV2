import { UserToken, GoogleUserType } from 'types/auth';

import client from './client';

const oAuthLogin = (credentials: GoogleUserType, provider: string): Promise<UserToken> =>
  client.post('/oauth?provider=google', credentials);

export { oAuthLogin };
