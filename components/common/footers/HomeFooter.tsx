import useLogout from '@hooks/useLogout';
import { useNavigation } from '@react-navigation/native';
import React, { ReactElement, useEffect, useMemo } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-root-toast';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import { HomeScreenNavigationType } from 'types/rotes';

const HomeFooter = (): ReactElement => {
  const { reset, navigate } = useNavigation<HomeScreenNavigationType>();
  const { logout, isLogoutSuccess, isLogoutError } = useLogout();

  const iconSize = useMemo(() => RFValue(20), []);
  const iconColor = useMemo(() => '#979797', []);

  const footerItems = useMemo(
    () => [
      {
        label: '방 만들기',
        icon: <AntDesign name="pluscircleo" size={iconSize} color={iconColor} />,
        onPress: () => navigate('RoomCreateRoutes'),
      },
      {
        label: '참가 요청',
        icon: <AntDesign name="enter" size={iconSize} color={iconColor} />,
        onPress: () => navigate('RoomCodeScreen'),
      },
      {
        label: '로그아웃',
        icon: <AntDesign name="logout" size={iconSize} color={iconColor} />,
        onPress: () => logout(),
      },
    ],
    [iconColor, iconSize, logout, navigate],
  );

  useEffect(() => {
    if (isLogoutSuccess) {
      Toast.show('로그아웃', { duration: Toast.durations.SHORT });
      reset({ routes: [{ name: 'AuthRoutes' }] });
    }

    if (isLogoutError) Toast.show('로그아웃 싳패', { duration: Toast.durations.SHORT });
  }, [isLogoutError, isLogoutSuccess, reset]);

  return (
    <Container>
      {footerItems.map((item) => (
        <IconGroup key={item.label} onPress={item.onPress}>
          {item.icon}
          <IconLabel>{item.label}</IconLabel>
        </IconGroup>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: ${hp(6)}px;
  margin-top: auto;
`;

const IconGroup = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const IconLabel = styled.Text`
  margin-top: ${hp(0.625)}px;
  font-size: ${RFValue(8)}px;
`;

export default HomeFooter;
