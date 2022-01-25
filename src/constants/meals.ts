import IconBreakfast from '../assets/eggs.svg';
import IconMorningSpeedboat from '../assets/fruits.svg';
import IconLunch from '../assets/vegetables.svg';
import IconAfternoonSnack from '../assets/popcorn.svg';
import IconDinner from '../assets/dinner.svg';
import React from 'react';
import { SvgProps } from 'react-native-svg';

type Meal = {
  Icon: React.FC<SvgProps>;
  nameMeal: string;
} 

export const meals : Meal[] = [
  {
    Icon: IconBreakfast,
    nameMeal: 'Café da manhã'
  },
  { 
    Icon: IconMorningSpeedboat,
    nameMeal: 'Lanche da manha',
  },
  { 
    Icon: IconLunch,
    nameMeal: 'Almoço'
  },
  { 
    Icon: IconAfternoonSnack,
    nameMeal: 'Lanche da tarde'
  },
  {
    Icon: IconDinner,
    nameMeal: 'Jantar'
  }
]