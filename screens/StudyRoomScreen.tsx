import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const StudyRoomScreen = () => {
  const { roomId } = useRoute().params;
  return (
    <View>
      <Text>스터디룸 {roomId}</Text>
    </View>
  );
};

export default StudyRoomScreen;
