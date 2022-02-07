import React from 'react';

import {
  Container,
  CalorieTotalText,
  Line,
  CalorieTotalValue,
} from './styles';

type CalorieTotalProps = {
  caloriesTotal: string | number;
}

export function CalorieTotal({caloriesTotal}: CalorieTotalProps) {
  return (
    <Container>
      <CalorieTotalText>Calorias total</CalorieTotalText>
      <Line />
      <CalorieTotalValue>{`${caloriesTotal} cal`}</CalorieTotalValue>
    </Container>
  )
}