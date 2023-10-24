import useRefresh from '@hooks/common/useRefresh';
import useFetchStudyRoomList from '@hooks/useFetchStudyRoomList';
import useStudyRoomStatus from '@hooks/useStudyRoomStatus';
import React from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import StudyRoomListItem from './StudyRoomListItem';

const StudyRoomList = () => {
  const { status } = useStudyRoomStatus();
  const { data, isLoading } = useFetchStudyRoomList(status);
  const { refresh, onRefresh } = useRefresh('homeStudyRoomList');

  return isLoading ? (
    <Container>
      <ActivityIndicator size={'large'} color={'blue'} />
    </Container>
  ) : (
    <Container>
      <StudyRoomScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        refreshControl={<RefreshControl refreshing={refresh.refreshing} onRefresh={onRefresh} />}
      >
        {data?.map((studyRoom) => (
          <MarginBottom key={studyRoom.room_id}>
            <StudyRoomListItem data={studyRoom} />
          </MarginBottom>
        ))}
      </StudyRoomScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

const MarginBottom = styled.View`
  margin-bottom: ${RFValue(20)}px;
`;

const StudyRoomScrollView = styled.ScrollView`
  padding: ${RFValue(12)}px;
`;

export default StudyRoomList;
