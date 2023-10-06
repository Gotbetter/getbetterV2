import useGoogleLogin from '@hooks/useGoogleLogin';
import React, { ReactElement, useEffect } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Toast from 'react-native-root-toast';
import styled from 'styled-components/native';
import { LoginScreenProps } from 'types/rotes';

import GoogleImg from '../../assets/images/google-icon.png';
import LogoImg from '../../assets/images/logo.png';

const LoginScreen = ({ navigation, route }: LoginScreenProps): ReactElement => {
  const { isGoogleLoginReady, isLoginSuccess, isError, login } = useGoogleLogin();

  useEffect(() => {
    if (isLoginSuccess) navigation.navigate('HomeRoutes');

    if (isError) Toast.show('로그인 실패, 잠시 후 다시 시도해주세요', { duration: Toast.durations.SHORT });
  }, [isLoginSuccess, isError, navigation]);

  return (
    <Container>
      <Logo source={LogoImg} resizeMode="contain" />
      <SloganWrapper>
        <Slogan>친구들과 함께</Slogan>
        <Slogan>더 나은 미래를 향해.</Slogan>
      </SloganWrapper>

      <GoogleLoginButtonWrapper>
        <GoogleButton disabled={!isGoogleLoginReady} onPress={() => login()}>
          <GoogleLogo source={GoogleImg} resizeMode="contain" />
          <Label>Google 로그인</Label>
        </GoogleButton>
      </GoogleLoginButtonWrapper>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
`;

const Logo = styled.Image`
  width: ${wp(80)}px;
  height: ${hp(30)}px;

  justify-content: center;
  align-items: center;
`;

const SloganWrapper = styled.View`
  width: 100%;
  height: ${hp(8)}px;

  align-items: center;
  justify-content: space-between;
`;

const Slogan = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 600;
`;

const GoogleLoginButtonWrapper = styled.View`
  margin-top: auto;
  margin-bottom: ${hp(6)}px;
`;
const GoogleLogo = styled.Image``;

const GoogleButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: ${wp(90)}px;
  height: ${hp(8)}px;

  border-width: 1px;
  border-radius: 15px;
  border-color: #e4e4e4;
`;

const Label = styled.Text`
  color: #697176;
  font-size: ${RFValue(12)}px;
  font-weight: 500;

  margin-left: ${RFValue(12)}px;
`;

export default LoginScreen;
