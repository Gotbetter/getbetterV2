import ContinueButton from '@components/common/btns/ContinueButton';
import useCategory from '@hooks/form/useCategory';
import { useNavigation } from '@react-navigation/native';
import React, { ReactElement, useMemo } from 'react';
import { Button, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { RoomCreateScreenNavigationType } from 'types/rotes';

type CategoryItemType = {
  label: string;
  value: string;
  img: ReactElement;
};

const CategoryFormScreen = () => {
  const { navigate } = useNavigation<RoomCreateScreenNavigationType>();
  const { category, onPress, hasAllInputs } = useCategory();

  const categoryItems = useMemo<CategoryItemType[]>(
    () => [
      {
        label: '공부',
        value: 'STUDY',
        img: <Image source={require('@images/category/study.png')} />,
      },
      {
        label: '운동',
        value: 'EXERCISE',
        img: <Image source={require('@images/category/exercise.png')} />,
      },
      {
        label: '개발',
        value: 'DEVELOP',
        img: <Image source={require('@images/category/develop.png')} />,
      },
      {
        label: '다이어트',
        value: 'DIET',
        img: <Image source={require('@images/category/diet.png')} />,
      },
      {
        label: '수험생',
        value: 'EXAM',
        img: <Image source={require('@images/category/exam.png')} />,
      },
      {
        label: '자격증',
        value: 'CERTIFICATE',
        img: <Image source={require('@images/category/certificates.png')} />,
      },
      {
        label: '정서관리',
        value: 'EMOTION',
        img: <Image source={require('@images/category/mind-control.png')} />,
      },
      {
        label: '생활습관',
        value: 'LIFESTYLE',
        img: <Image source={require('@images/category/lifestyle.png')} />,
      },
      {
        label: '기타',
        value: 'ETC',
        img: <Image source={require('@images/category/others.png')} />,
      },
    ],
    [],
  );

  return (
    <Container>
      <Title>어떤 종류의 방인가요?</Title>
      <CategoryContainer>
        {categoryItems.map((item) => (
          <Category key={item.label} onPress={() => onPress(item.value)} selected={category === item.value}>
            {item.img}
            <CategoryLabel>{item.label}</CategoryLabel>
          </Category>
        ))}
      </CategoryContainer>
      <ButtonContainer>
        <ContinueButton
          title={'다음'}
          size={'full'}
          onPress={() => navigate('TitleFormScreen')}
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

const CategoryContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: space-around;

  height: 60%;
  margin-top: ${hp(2)}px;
`;

type CategoryProps = {
  selected: boolean;
};

const Category = styled.TouchableOpacity`
  width: 30%;
  height: 30%;

  background-color: ${({ selected }: CategoryProps) => (selected ? '#E0E0E0' : '#ffffff')};
  justify-content: center;
  align-items: center;
`;

const CategoryLabel = styled.Text`
  color: #5f5f5f;
  font-weight: 700;
  margin-top: ${RFValue(4)}px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  align-self: center;
  margin-top: auto;
  margin-bottom: ${hp(4)}px;
`;

export default CategoryFormScreen;
