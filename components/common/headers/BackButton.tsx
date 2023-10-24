import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BackButton = () => {
  const { goBack } = useNavigation();
  return <AntDesign name="left" size={RFValue(22)} color={'black'} onPress={goBack} />;
};

export default BackButton;
