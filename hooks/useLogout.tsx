import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from 'react';

type useLogoutType = {
  logout: () => Promise<void>;
  isLogoutSuccess: boolean;
  isLogoutError: boolean;
};

const useLogout = (): useLogoutType => {
  const [isLogoutError, setIsLogoutError] = useState(false);
  const [isLogoutSuccess, setIsLogoutSuccess] = useState(false);

  const logout = useCallback(async () => {
    try {
      await AsyncStorage.multiRemove(['access_token', 'refresh_token']);
      setIsLogoutSuccess(true);
      setIsLogoutError(false);
    } catch (err) {
      setIsLogoutSuccess(false);
      setIsLogoutError(true);
    }
  }, []);
  return { logout, isLogoutSuccess, isLogoutError };
};

export default useLogout;
