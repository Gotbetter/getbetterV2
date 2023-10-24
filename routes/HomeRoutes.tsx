import HomeHeader from '@components/common/headers/HomeHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import React, { ReactElement } from 'react';
import { HomeStackParamList } from 'types/rotes';

import RoomCreateRoutes from './RoomCreateRoutes';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeRoutes = (): ReactElement => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ header: () => <HomeHeader /> }} />
      <HomeStack.Screen name="RoomCreateRoutes" component={RoomCreateRoutes} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
