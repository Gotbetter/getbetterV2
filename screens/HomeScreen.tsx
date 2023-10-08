import HomeFooter from '@components/common/footers/HomeFooter';
import StudyRoomList from '@components/home/StudyRoomList';
import React from 'react';
import styled from 'styled-components/native';

const HomeScreen = () => {
  return (
    <Container>
      <StudyRoomList />
      <HomeFooter />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export default HomeScreen;
