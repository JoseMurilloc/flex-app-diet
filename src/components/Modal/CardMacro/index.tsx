
import React from 'react';

import { 
  Container, 
  NameMacro,
  ValueMacro
} from './styles';
import { CardMacroProps } from './types';


const nameLabel = {
  protein: "Proteina",
  fat: "Gorduras",
  cabos: "Carbos"
}

export function CardMacro({name, value, type}: CardMacroProps) {
  return (
    <Container>
      <NameMacro type={type}>{nameLabel[type]}</NameMacro>
      <ValueMacro>{`${value}g`}</ValueMacro>
    </Container>
  )
}
