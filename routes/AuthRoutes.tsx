import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/auth/LoginScreen';
import React, { ReactElement } from 'react';
import { AuthStackParamList } from 'types/rotes';

const Auth = createNativeStackNavigator<AuthStackParamList>();

const AuthRoutes = (): ReactElement => {
  return (
    <Auth.Navigator>
      <Auth.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
