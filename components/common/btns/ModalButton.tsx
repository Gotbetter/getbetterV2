import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

type PropTypes = {
  title: string;
  width: number;
  height: number;
  highlight: boolean;
  onPress: () => void;
};

const ModalButton = ({ width = wp(25), height = hp(5), highlight, title, onPress }: PropTypes) => {
  return (
    <Container onPress={onPress} width={width} height={height} highlight={highlight}>
      <Label highlight={highlight}>{title}</Label>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  ${({ width, height, highlight }: PropTypes) => `
    width: ${width}px;
    height: ${height}px;
    border-width: ${highlight ? 0 : 1}px;
    border-color: ${highlight ? '#ffffff' : '#979797'};
    background-color: ${highlight ? '#3333ff' : '#ffffff'}; 
  `};

  font-weight: 600;
  border-radius: 40px;

  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-weight: 600;
  color: ${({ highlight }: PropTypes) => (highlight ? '#ffffff' : '#979797')};
`;

export default ModalButton;
