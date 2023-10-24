import ContinueButton from '@components/common/btns/ContinueButton';
import StudyRoomCreateResultModal from '@components/modals/StudyRoomCreateResultModal';
import useAccount from '@hooks/form/useAccount';
import useStudyRoomMutation from '@hooks/query/post/useStudyRoomMutation';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

const AccountFormScreen = () => {
  const { account, hasAllInputs, onChangeText } = useAccount();
  const { mutate, isSuccess, isError, roomId } = useStudyRoomMutation();

  return (
    <Container>
      <Title>계좌 번호 입력하기</Title>
      <Input value={account} placeholder="계좌 번호를 입력해주세요.." onChangeText={onChangeText} />
      <Example>ex) 국민 000000-00-00000</Example>
      <ButtonContainer>
        <ContinueButton
          title={hasAllInputs ? '완료' : '계좌 번호 입력하기'}
          size={'full'}
          onPress={mutate}
          disabled={!hasAllInputs}
          round
        />
      </ButtonContainer>

      {roomId && <StudyRoomCreateResultModal isError={isError} isSuccess={isSuccess} roomId={roomId} />}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: ${RFValue(12)}px;
`;

const Title = styled.Text`
  margin-top: ${hp(3)}px;
  font-size: ${RFValue(18)}px;
  font-weight: 600;
`;

const Example = styled.Text`
  width: ${wp(90)}px;
  align-self: center;
  margin-top: ${RFValue(4)}px;
  padding-left: ${RFValue(4)}px;

  font-size: ${RFValue(10)}px;
  color: #979797;
`;

const Input = styled.TextInput`
  width: ${wp(90)}px;
  height: ${hp(7)}px;

  margin-top: ${hp(1)}px;
  padding-left: ${RFValue(12)}px;

  align-self: center;

  border-width: 1px;
  border-radius: 10px;
  border-color: #e0e0e0;
`;

const ButtonContainer = styled.View`
  width: 100%;
  align-self: center;
  margin-top: auto;
  margin-bottom: ${hp(4)}px;
`;
export default AccountFormScreen;
