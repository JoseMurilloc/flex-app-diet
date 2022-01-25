import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { meals } from '../../constants/meals';
import { 
  Container,
  Title,
  Header,
  Meal,
  Name
} from './styles';
import { CardOptionsMealProps } from './types';

export function CardOptionsMeal({setOpenMenuMeal}: CardOptionsMealProps) {
  const navigation = useNavigation();

  function handleNavigatedToMountDish() {
    setOpenMenuMeal(state => !state);
    navigation.navigate('MountDish')
  }

  return (
    <Container>
      <Header style={styles.borderBt}>
        <Title>Refeições</Title>
      </Header>
      {meals.map(({Icon, nameMeal}) => (
        <Meal 
          key={nameMeal}
          onPress={() => handleNavigatedToMountDish()}
        >
          <Icon width={24} height={24} />
          <Name>{nameMeal}</Name>
        </Meal>
      ))}
    </Container>
  )
}

const styles = StyleSheet.create({
  borderBt: {
    borderBottomColor: '#A7A7A7',
    borderBottomWidth: 0.3
  }
})