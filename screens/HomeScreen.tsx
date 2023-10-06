import useLogout from '@hooks/useLogout';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import Toast from 'react-native-root-toast';
import { HomeScreenNavigationType } from 'types/rotes';

const HomeScreen = () => {
  const { reset } = useNavigation<HomeScreenNavigationType>();

  const { logout, isLogoutSuccess, isLogoutError } = useLogout();

  useEffect(() => {
    if (isLogoutSuccess) {
      Toast.show('로그아웃', { duration: Toast.durations.SHORT });
      reset({ routes: [{ name: 'AuthRoutes' }] });
    }

    if (isLogoutError) Toast.show('로그아웃 싳패', { duration: Toast.durations.SHORT });
  }, [isLogoutError, isLogoutSuccess, reset]);

  return (
    <View>
      <Button title="logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
