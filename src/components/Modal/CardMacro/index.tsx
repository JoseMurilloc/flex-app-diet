
import React from 'react';
import { 
  Container, 
  NameMacro,
  ValueMacro
} from './styles';

type CardMacroProps = {
  name: string;
  value: number;
}

export function CardMacro({name, value}: CardMacroProps) {
  return (
    <Container>
      <NameMacro>{name}</NameMacro>
      <ValueMacro>{`${value}g`}</ValueMacro>
    </Container>
  )
}