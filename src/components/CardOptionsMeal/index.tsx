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

export function CardOptionsMeal() {
  return (
    <Container>
      <Header style={styles.borderBt}>
        <Title>Refeições</Title>
      </Header>
      {meals.map(({Icon, nameMeal}) => (
        <Meal key={nameMeal}>
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