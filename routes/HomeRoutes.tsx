import HomeHeader from '@components/common/headers/HomeHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import React, { ReactElement } from 'react';
import { HomeStackParamList } from 'types/rotes';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeRoutes = (): ReactElement => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ header: () => <HomeHeader /> }} />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
