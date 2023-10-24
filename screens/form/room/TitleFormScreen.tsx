import ContinueButton from '@components/common/btns/ContinueButton';
import useTitle from '@hooks/form/useTitle';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { RoomCreateScreenNavigationType } from 'types/rotes';

const TitleFormScreen = () => {
  const { navigate } = useNavigation<RoomCreateScreenNavigationType>();
  const { title, onChangeText, hasAllInputs } = useTitle();
  return (
    <Container>
      <Title>방 이름을 지어주세요.</Title>
      <Input value={title} placeholder="방 이름을 지어주세요." onChangeText={onChangeText} />

      <ButtonContainer>
        <ContinueButton
          title={'다음'}
          size={'full'}
          disabled={!hasAllInputs}
          onPress={() => navigate('DescriptionFormScreen')}
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
  align-self: center;
  margin-top: auto;
  width: 100%;
  margin-bottom: ${hp(4)}px;
`;

export default TitleFormScreen;
