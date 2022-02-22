import React from 'react';
import * as Progress from 'react-native-progress';
import theme from '../../global/styles/theme';
import { MacroName, Container } from './styles';

type Props = {
  name: string;
  progress: number;
  amount: number;
}

export function ProgressBarMacroItem ({
  name,
  progress,
  amount
}: Props) {
  return (
    <Container>
      <MacroName>{name}</MacroName>
      <Progress.Bar 
        progress={progress} 
        width={amount}
        color={theme.colors.primary}
        style={{
          backgroundColor: '#E3E3E3',
          borderColor: 'transparent',
          width: 100,
        }} 
      />
    </Container>
  );
}