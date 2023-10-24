import ModalButton from '@components/common/btns/ModalButton';
import OppositeIcon from '@components/common/icon/OppositeIcon';
import { useNavigation } from '@react-navigation/core';
import React, { ReactElement, useCallback } from 'react';
import { Modal } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import { StudyRoomScreenNavigationType } from 'types/rotes';

type PropTypes = {
  isSuccess: boolean;
  isError: boolean;
  roomId: number;
};

const StudyRoomCreateResultModal = ({ isSuccess, isError, roomId }: PropTypes): ReactElement | undefined => {
  const navigation = useNavigation<StudyRoomScreenNavigationType>();

  const close = useCallback(() => navigation.reset({ routes: [{ name: 'HomeScreen' }] }), [navigation]);

  const confirm = useCallback(() => {
    navigation.reset({ routes: [{ name: 'HomeScreen' }] });
    navigation.navigate('StudyRoomRoutes', { roomId });
  }, [navigation, roomId]);

  if (isSuccess)
    return (
      <Modal visible={true} transparent>
        <CenterView>
          <Container>
            <Feather name="check" size={RFValue(40)} color={'#3333FF'} />
            <Title>방 만들기 완료</Title>
            <Description>방 만들기가 완료되었습니다.</Description>
            <ModalButton title={'닫기'} onPress={close} width={wp(25)} height={hp(5)} highlight={false} />
            <ModalButton title={'바로가기'} onPress={confirm} width={wp(25)} height={hp(5)} highlight />
          </Container>
        </CenterView>
      </Modal>
    );
  if (isError)
    return (
      <Modal visible={true} transparent>
        <CenterView>
          <Container>
            <OppositeIcon width={RFValue(50)} height={RFValue(50)} color={'#3333FF'} />

            <Title>방 만들기 실패</Title>
            <DescriptionContainer>
              <Description>서버에 문제가 있습니다.</Description>
              <Description>추후에 다시 시도해 주세요.</Description>
            </DescriptionContainer>

            <ModalButton title={'닫기'} onPress={close} width={wp(25)} height={hp(5)} highlight={false} />
          </Container>
        </CenterView>
      </Modal>
    );
};

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: #9797979c;
`;

const Container = styled.View`
  width: ${wp(78)}px;
  height: ${hp(32)}px;
  border-radius: 10px;
  background-color: #ffffff;

  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;

  padding: ${RFValue(12)}px;
  margin-bottom: ${hp(8)}px;
`;

const Title = styled.Text`
  width: 100%;
  font-size: ${RFValue(18)}px;
  font-weight: 600;
  text-align: center;
`;

const DescriptionContainer = styled.View`
  width: 100%;
`;
const Description = styled.Text`
  width: 100%;
  color: #979797;
  text-align: center;
`;

export default StudyRoomCreateResultModal;
