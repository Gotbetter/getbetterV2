import ContinueButton from '@components/common/btns/ContinueButton';
import useRule from '@hooks/form/useRule';
import useStudyRoomRuleQuery from '@hooks/query/get/useStudyRoomRuleQuery';
import { useNavigation } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import { RoomCreateScreenNavigationType } from 'types/rotes';

const RuleFormScreen = (): ReactElement | null => {
  const { navigate } = useNavigation<RoomCreateScreenNavigationType>();
  const { data, isLoading } = useStudyRoomRuleQuery();
  const { rule, selectedIndex, hasAllInputs, selectRule } = useRule();

  return isLoading ? null : (
    <Container>
      <Title>방 규칙</Title>
      <RuleList>
        {data?.slice(0, 1).map((item, index: number) => (
          <Rule key={item.rule_code}>
            <RuleLabel>{item.rule_description}</RuleLabel>
            <Ionicons
              name={rule === item.rule_code ? 'radio-button-on' : 'radio-button-off'}
              size={RFValue(18)}
              onPress={() => selectRule(item.rule_code, index)}
            />
          </Rule>
        ))}
      </RuleList>
      <Info>(더 많은 규칙이 추가 될 예정입니다.)</Info>
      {selectedIndex !== null && data ? (
        <MarginTop>
          <RuleDescriptionContainer>
            <RuleTitle>{data[selectedIndex].rule_description}</RuleTitle>
            <RuleDescription>{data[selectedIndex].rule_attribute1}</RuleDescription>
            <RuleContents>{data[selectedIndex].rule_attribute2}</RuleContents>
          </RuleDescriptionContainer>
        </MarginTop>
      ) : null}
      <ButtonContainer>
        <ContinueButton
          title={'다음'}
          size={'full'}
          onPress={() => navigate('AccountFormScreen')}
          disabled={!hasAllInputs}
          round
        />
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: ${RFValue(12)}px;
  background-color: white;
`;
const Title = styled.Text`
  margin-top: ${hp(3)}px;
  font-size: ${RFValue(18)}px;
  font-weight: 600;
`;

const RuleLabel = styled.Text``;

const Info = styled.Text`
  align-self: center;

  width: ${wp(95)}px;

  margin-top: ${hp(0.625)}px;

  color: #979797;
  font-size: ${RFValue(8)}px;
  font-weight: 600;
`;

const RuleList = styled.View`
  width: ${wp(95)}px;
  margin-top: ${RFValue(8)}px;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-self: center;
`;

const Rule = styled.View`
  border: 1px solid black;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: ${wp(30)}px;
  min-height: ${hp(4)}px;

  padding-left: ${RFValue(2)}px;
  padding-right: ${RFValue(2)}px;

  border-width: 1px;
  border-radius: ${wp(4)}px;
  border-color: #e4e4e4;
`;

const RuleDescriptionContainer = styled.View`
  width: ${wp(90)}px;
  height: ${hp(30)}px;

  background-color: #ffffff;
  border-radius: 18px;

  justify-content: space-around;
  align-items: center;
  padding: ${RFValue(12)}px;
  elevation: 4;
`;

const MarginTop = styled.View`
  align-self: center;
  margin-top: ${hp(10)}px;
`;

const RuleTitle = styled.Text`
  font-weight: 600;
`;

const RuleDescription = styled.Text`
  color: #959595;
`;

const RuleContents = styled.Text`
  width: 80%;
  height: 60%;
  font-weight: 600;
  background-color: #f6f6f6;
  text-align: center;
  text-align-vertical: center;
`;

const ButtonContainer = styled.View`
  width: 100%;
  align-self: center;
  margin-top: auto;
  margin-bottom: ${hp(4)}px;
`;

export default RuleFormScreen;
