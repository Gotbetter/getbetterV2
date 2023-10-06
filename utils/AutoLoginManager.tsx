import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { ReactElement, useEffect } from 'react';
import { AutoLoginManagerNavigationType } from 'types/rotes';

type PropsType = {
  children: ReactElement | ReactElement[];
};

const AutoLoginManager = ({ children }: PropsType) => {
  const { reset } = useNavigation<AutoLoginManagerNavigationType>();

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('access_token');

      if (token === null) {
        reset({ routes: [{ name: 'AuthRoutes' }] });
      } else {
        reset({ routes: [{ name: 'HomeRoutes' }] });
      }
    };
    checkLogin();
  }, [reset]);
  return <>{children}</>;
};

export default AutoLoginManager;
