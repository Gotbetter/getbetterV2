import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError } from 'axios';
import format from 'pretty-format';

const client = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  withCredentials: true,
});

client.interceptors.request.use(async (config) => {
  if (!config.headers) {
    return config;
  }
  if (config.url === '/oauth?provider=google' || (config.url === '/users' && config.method === 'POST')) {
    return config;
  }

  let token = null;
  if (config.url === '/users/reissue') {
    token = await AsyncStorage.getItem('refresh_token');
  } else {
    token = await AsyncStorage.getItem('access_token');
  }

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

client.interceptors.response.use(
  (res) => res,
  async (err) => {
    const {
      config,
      response: { status },
    } = err;

    /** 1 */
    if (config.url === `/users/reissue` || status !== 401 || config.sent) {
      return Promise.reject(err);
    }

    /** 2 */
    config.sent = true;

    const refresh_token = await AsyncStorage.getItem('refresh_token');

    if (refresh_token !== null) {
      const accessToken = await refreshToken(refresh_token);

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    return client(config);
  },
);
const refreshToken = async (refreshToken: string): Promise<string | null> => {
  try {
    const {
      data: { access_token, refresh_token },
    } = await client.post(
      `/users/reissue`,
      {},
      {
        headers: {
          authorization: `Bearer ${refreshToken}`,
        },
      },
    );
    await AsyncStorage.setItem('access_token', access_token);
    await AsyncStorage.setItem('refresh_token', refresh_token);

    return access_token;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.log(format(err.response));
    } else {
      console.log(format(JSON.stringify(err)));
    }
    return null;
  }
};

export default client;
