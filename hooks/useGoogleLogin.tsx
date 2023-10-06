import { oAuthLogin } from '@api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session';
import { useAuthRequest } from 'expo-auth-session/providers/google';
import format from 'pretty-format';
import { useEffect, useState } from 'react';
import Toast from 'react-native-root-toast';
import { GoogleUserType } from 'types/auth';

interface useGoogleLoginType {
  login: (options?: AuthRequestPromptOptions | undefined) => Promise<AuthSessionResult>;
  isGoogleLoginReady: boolean;
  isLoginSuccess: boolean;
  isError: boolean;
}

const useGoogleLogin = (): useGoogleLoginType => {
  const [isGoogleLoginReady, setReady] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [request, response, promptAsync] = useAuthRequest({
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
  });

  useEffect(() => {
    setReady(request !== null);

    async function loginGoogle() {
      if (response?.type !== 'success') return;

      const token: string | undefined = response.authentication?.accessToken;

      if (token) {
        try {
          const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const user: GoogleUserType = await response.json();
          const { id, email, name, picture } = user;

          const oAuthLoginRequest = { id, email, name, picture };

          try {
            const response = await oAuthLogin(oAuthLoginRequest, 'google');

            const { access_token, refresh_token } = response.data;
            await AsyncStorage.setItem('access_token', access_token);
            await AsyncStorage.setItem('refresh_token', refresh_token);
            setIsLoginSuccess(true);
            setIsError(false);

            Toast.show('로그인 성공', { duration: Toast.durations.SHORT });
          } catch (serverError) {
            console.log('서버 에러');
            console.log(format(serverError));
            setIsLoginSuccess(false);
            setIsError(true);
          }
        } catch (googleError) {
          console.log('구글 에러');
          console.log(format(googleError));
          setIsLoginSuccess(false);
          setIsError(true);
        }
      }
    }
    loginGoogle();
  }, [request, response]);
  return { isGoogleLoginReady, login: promptAsync, isLoginSuccess, isError };
};

export default useGoogleLogin;
