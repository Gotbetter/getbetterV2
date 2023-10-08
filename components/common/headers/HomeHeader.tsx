import useStudyRoomStatus from '@hooks/useStudyRoomStatus';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import LogoImage from '../../../assets/images/logo.png';

const HomeHeader = () => {
  const { status, onPressStatus } = useStudyRoomStatus();
  return (
    <Container>
      <LogoContainer>
        <Logo source={LogoImage} resizeMode="contain" />
      </LogoContainer>
      <TabContainer>
        <Tab selected={status === '전체'} onPress={() => onPressStatus('전체')}>
          <Label>전체</Label>
        </Tab>
        <Tab selected={status === '진행중'} onPress={() => onPressStatus('진행중')}>
          <Label style={{ color: '#3333FF' }}>진행중</Label>
        </Tab>
      </TabContainer>
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
`;

const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(80)}px;
`;

const TabContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Tab = styled.TouchableOpacity`
  width: 50%;
  padding: ${RFValue(12)}px;
  border-bottom-width: ${({ selected }) => (selected ? 2 : 0)}px;
  border-bottom-color: ${({ selected }) => selected && '#000000'};
`;

const Label = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 700;
  text-align: center;
`;
export default HomeHeader;
