import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

type PropTypes = {
  title: string;
  size: 'full' | 'middle';
  round: boolean;
  disabled: boolean;
  onPress: () => void;
};

const ContinueButton = ({ title, size, round = false, disabled, onPress }: PropTypes) => {
  const color = disabled ? '#E0E0E0' : '#3333FF';

  return (
    <Container disabled={disabled} color={color} onPress={onPress} size={size} round={round}>
      <Title disabled={disabled}>{title}</Title>
    </Container>
  );
};

type ButtonStyleProps = {
  color: string;
  size: string;
  round: boolean;
  disabled: boolean;
};

const Container = styled.TouchableOpacity`
  height: ${hp(7)}px;
  ${({ color, round }: ButtonStyleProps) => `
    color: ${color};
    border-radius: ${round ? RFValue(15) : 0}px;
  `}
  background-color: ${({ color }: ButtonStyleProps) => color};
  ${({ size }: ButtonStyleProps) => {
    switch (size) {
      case 'middle':
        return `
                width: 50%;
            `;
      case 'full':
        return `
                width: 100%;
            `;
      default:
        break;
    }
  }};
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: ${RFValue(16)}px;
  ${({ disabled }: ButtonStyleProps) => (disabled ? `color: #979797` : `color: #ffffff`)};
`;

export default ContinueButton;
