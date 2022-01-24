import React from 'react';
import theme from '../../global/styles/theme';
import {Pie} from '../Pie';
import { ProgressBarMacroItem } from '../ProgressBarMacroItem';
import { Container, ProgressMacros } from './styles';
import { GraphicMetricCaloriesProps } from './types';

export function GraphicMetricCalories ({data}: GraphicMetricCaloriesProps) {
  return (
    <Container>
      <Pie 
        data={{
          color: theme.colors.primary,
          radius: 59,
          strokeWidth: 13,
          delay: 200,
          percentage: 1500,
          max: 2000,
          duration: 500,
          textColor: theme.colors.text,
        }}
      />
      <ProgressMacros>
        {data.map(macro => (
          <ProgressBarMacroItem
            key={macro.name} 
            name={macro.name}
            amount={macro.amount}
            progress={macro.progress}
          />
        ))}
      </ProgressMacros>
    </Container>
  );
}
