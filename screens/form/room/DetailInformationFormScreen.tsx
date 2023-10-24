import ContinueButton from '@components/common/btns/ContinueButton';
import useDetailInformation from '@hooks/form/useDetailInformation';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { RoomCreateScreenNavigationType } from 'types/rotes';

const DetailInformationFormScreen = () => {
  const { navigate } = useNavigation<RoomCreateScreenNavigationType>();

  const {
    startDate,
    week,
    maxUserNum,
    peopleLimits,
    entryFee,
    entryFeeList,
    weekList,
    today,
    hasAllInputs,
    isCalendarOpen,
    openCalendar,
    handleCalendar,
    handleDetailInformation,
  } = useDetailInformation();

  return (
    <Container>
      <Title>인원 선택</Title>
      <SubTitle>인원 제한</SubTitle>
      <PickerContainer>
        <FullSizePicker
          dropdownIconColor={'#ffffff'}
          onValueChange={(value: number) => handleDetailInformation(value, 'max_user_num')}
          selectedValue={maxUserNum}
        >
          {peopleLimits.map((count) => (
            <Picker.Item key={count} label={`${count}명`} value={count} />
          ))}
        </FullSizePicker>
      </PickerContainer>

      <Title>일정 선택</Title>
      <PickerGroup>
        <PickerLabel>시작일</PickerLabel>
        <PickerLabel>진행주차</PickerLabel>
        <DatePicker onPress={openCalendar}>
          <Text>{startDate}</Text>
        </DatePicker>
        <PickerContainer style={{ width: '45%' }}>
          <HalfSizePicker
            dropdownIconColor={'#ffffff'}
            onValueChange={(value: number) => handleDetailInformation(value, 'week')}
            selectedValue={week}
          >
            {weekList.map((week) => (
              <Picker.Item key={week.key} label={week.label} value={week.value} />
            ))}
          </HalfSizePicker>
        </PickerContainer>
      </PickerGroup>
      <Title>금액 선택</Title>
      <PickerContainer>
        <FullSizePicker
          dropdownIconColor={'#ffffff'}
          onValueChange={(value: number) => handleDetailInformation(value, 'entry_fee')}
          selectedValue={entryFee}
        >
          {entryFeeList.map((entryFee) => (
            <Picker.Item key={entryFee.key} label={entryFee.label} value={entryFee.value} />
          ))}
        </FullSizePicker>
      </PickerContainer>

      {isCalendarOpen && <RNDateTimePicker mode="date" value={today} onChange={handleCalendar} minimumDate={today} />}
      <ButtonContainer>
        <ContinueButton
          title={'다음'}
          size={'full'}
          onPress={() => navigate('RuleFormScreen')}
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

const SubTitle = styled.Text`
  margin: ${RFValue(4)}px 0 0 ${RFValue(4)}px;
  color: #a3a3a3;
`;

const PickerGroup = styled.View`
  width: ${wp(90)}px;

  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
`;

const PickerLabel = styled.Text`
  width: 45%;
  margin-top: ${RFValue(4)}px;
  color: #a3a3a3;
`;

const PickerContainer = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
`;

const FullSizePicker = styled(Picker)`
  width: 100%;
  border: 1px solid black;
  margin-left: -16px;
  align-self: center;
`;

const HalfSizePicker = styled(Picker)`
  width: 100%;
  margin-left: -16px;
`;

const DatePicker = styled.TouchableOpacity`
  width: 45%;
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
  justify-content: center;
`;

const ButtonContainer = styled.View`
  width: 100%;
  align-self: center;
  margin-top: auto;
  margin-bottom: ${hp(4)}px;
`;

export default DetailInformationFormScreen;
