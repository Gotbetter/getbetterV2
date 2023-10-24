import React, { ReactElement, useMemo } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type PropTypes = {
  startDate: string;
  week: number;
};

const StudyRoomStatus = ({ startDate, week }: PropTypes): ReactElement => {
  const roomStatus = useMemo(() => {
    // 현재 시각
    const today = new Date();
    const currentTime = today.getTime() - today.getTimezoneOffset() * 60000;

    // 시작일
    const start = new Date(startDate);

    if (currentTime < start.getTime()) return 'WAIT';

    const endDate = new Date(startDate);
    endDate.setDate(start.getDate() + 7 * week);

    if (currentTime <= endDate.getTime()) return 'PROGRESS';
    else return 'END';
  }, [startDate, week]);

  switch (roomStatus) {
    case 'PROGRESS':
      return (
        <Container>
          <Label color={'#3333FF'}>&#183; 진행중</Label>
        </Container>
      );

    case 'END':
      return (
        <Container>
          <Label color={'#FF3395'}>&#183; 종료</Label>
        </Container>
      );
    default:
      return <></>;
  }
};

const Container = styled.View`
  flex-direction: row;
  flex-grow: 1;
  margin-left: ${RFValue(4)}px;
`;

type LabelProps = {
  color: string;
};

const Label = styled.Text`
  color: ${({ color }: LabelProps) => color};
  font-weight: 700;
  font-size: ${RFValue(10)}px;
`;

export default StudyRoomStatus;
