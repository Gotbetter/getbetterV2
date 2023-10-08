import React, { useMemo } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { StudyRoomListType } from 'types/studyroom';

import StudyRoomStatus from './StudyRoomStatus';
import UserIcon from '../../assets/images/user-background-icon.png';

type PropTypes = {
  data: StudyRoomListType;
};

type TagTypes = {
  id: string | number;
  label: string;
};

const StudyRoomListItem = ({ data }: PropTypes) => {
  const { title, description, week, start_date, room_category, entry_fee, max_user_num, current_user_num } = data;

  const tags = useMemo<TagTypes[]>(
    () => [
      {
        id: week,
        label: `${week}주`,
      },
      {
        id: room_category,
        label: `${room_category}`,
      },
      {
        id: entry_fee,
        label: `${entry_fee.toLocaleString('ko-KR')}원`,
      },
    ],
    [entry_fee, room_category, week],
  );

  return (
    <Container activeOpacity={0.8}>
      <RoomTitle numberOfLines={1}>{title}</RoomTitle>
      <StudyRoomStatus startDate={start_date} week={week} />
      <Description numberOfLines={2}>{description}</Description>
      <SubInfoContainer>
        {tags.map((tag) => (
          <StudyRoomTag key={tag.id}>
            <TagText>{tag.label}</TagText>
          </StudyRoomTag>
        ))}
        <EntryInfo>
          <EntryInfoIcon source={UserIcon} resizeMode={'contain'} />
          <EntryInfoText>{`${current_user_num}명/${max_user_num}명`}</EntryInfoText>
        </EntryInfo>
      </SubInfoContainer>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  width: ${wp(88)}px;
  height: ${hp(18)}px;

  background-color: #ffffff;
  border-radius: 15px;

  padding: ${RFValue(12)}px;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;

  elevation: 4;
`;

const RoomTitle = styled.Text`
  max-width: 60%;
  font-size: ${RFValue(14)}px;
  font-weight: 700;
`;

const Description = styled.Text`
  width: 100%;

  font-size: ${RFValue(10)}px;
  font-weight: 600;
  color: #848484;
`;

const SubInfoContainer = styled.View`
  width: 80%;

  flex-direction: row;
  justify-content: space-between;

  margin-right: auto;
`;

const StudyRoomTag = styled.View`
  background-color: #f2f3f5;
  border-radius: 4px;
  padding: ${RFValue(4)}px;
`;

const TagText = styled.Text`
  font-weight: 700;
  font-size: ${RFValue(10)}px;
  color: #979797;
`;

const EntryInfo = styled.View`
  border-radius: 4px;
  padding: ${RFValue(4)}px;
  flex-direction: row;
  align-items: center;
  background-color: #697176;
`;

const EntryInfoIcon = styled.Image`
  width: ${RFValue(10)}px;
  height: ${RFValue(10)}px;
  margin-right: ${RFValue(4)}px;
`;

const EntryInfoText = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: 700;
  color: #ffffff;
`;

export default StudyRoomListItem;
