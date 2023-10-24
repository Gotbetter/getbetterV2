import ContinueButton from '@components/common/btns/ContinueButton';
import useDescription from '@hooks/form/useDescription';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { RoomCreateScreenNavigationType } from 'types/rotes';

const DescriptionFormScreen = () => {
  const { navigate } = useNavigation<RoomCreateScreenNavigationType>();
  const { description, onChangeText, hasAllInputs } = useDescription();
  return (
    <Container>
      <Title>방 소개를 작성해주세요</Title>
      <TextLength>글자수 제한 {description.length}/60</TextLength>

      <Input
        value={description}
        maxLength={60}
        onChangeText={onChangeText}
        multiline={true}
        placeholder="어떤 활동을 할지 간단하게 소개해주세요."
      />
      <ButtonContainer>
        <ContinueButton
          title={'다음'}
          size={'full'}
          onPress={() => navigate('DetailInformationFormScreen')}
          disabled={!hasAllInputs}
          round
        />
      </ButtonContainer>
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

const TextLength = styled.Text`
  color: #979797;
`;

const Input = styled.TextInput`
  width: ${wp(90)}px;
  height: ${hp(20)}px;
  margin-top: ${hp(1)}px;
  padding: ${RFValue(12)}px;

  align-self: center;
  text-align-vertical: top;

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

export default DescriptionFormScreen;
