import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudyRoomScreen from '@screens/StudyRoomScreen';
import React from 'react';
import { StudyRoomStackParamList } from 'types/rotes';

const StudyRoomStack = createNativeStackNavigator<StudyRoomStackParamList>();

const StudyRoomRoutes = () => {
  const { roomId } = useRoute().params;
  return (
    <StudyRoomStack.Navigator initialRouteName="StudyRoomScreen">
      <StudyRoomStack.Screen name="StudyRoomScreen" component={StudyRoomScreen} initialParams={{ roomId }} />
    </StudyRoomStack.Navigator>
  );
};

export default StudyRoomRoutes;
