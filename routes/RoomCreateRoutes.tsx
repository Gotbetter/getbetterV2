import BackButton from '@components/common/headers/BackButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { studyRoomCreateRequest } from '@recoil/room/atom';
import {
  AccountFormScreen,
  CategoryFormScreen,
  DescriptionFormScreen,
  DetailInformationFormScreen,
  RuleFormScreen,
  TitleFormScreen,
} from '@screens/form/room';
import React, { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import { RoomCreateStackParamList } from 'types/rotes';

const RoomCreateStack = createNativeStackNavigator<RoomCreateStackParamList>();

const RoomCreateRoutes = () => {
  const resetRequest = useResetRecoilState(studyRoomCreateRequest);

  useEffect(() => {
    resetRequest();
  }, [resetRequest]);

  return (
    <RoomCreateStack.Navigator
      initialRouteName="CategoryFormScreen"
      screenOptions={{
        title: '방 만들기',
        headerTitleAlign: 'center',
        headerBackVisible: false,
        headerLeft: () => <BackButton />,
        headerTitleStyle: { color: '#000000', fontWeight: '700' },
      }}
    >
      <RoomCreateStack.Screen name="CategoryFormScreen" component={CategoryFormScreen} />
      <RoomCreateStack.Screen name="TitleFormScreen" component={TitleFormScreen} />
      <RoomCreateStack.Screen name="DescriptionFormScreen" component={DescriptionFormScreen} />
      <RoomCreateStack.Screen name="DetailInformationFormScreen" component={DetailInformationFormScreen} />
      <RoomCreateStack.Screen name="RuleFormScreen" component={RuleFormScreen} />
      <RoomCreateStack.Screen name="AccountFormScreen" component={AccountFormScreen} />
    </RoomCreateStack.Navigator>
  );
};

export default RoomCreateRoutes;
