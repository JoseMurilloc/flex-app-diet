import IconBreakfast from '../assets/eggs.svg';
import IconMorningSpeedboat from '../assets/fruits.svg';
import IconLunch from '../assets/vegetables.svg';
import IconAfternoonSnack from '../assets/popcorn.svg';
import IconDinner from '../assets/dinner.svg';
import React from 'react';
import { SvgProps } from 'react-native-svg';

type Meal = {
  icon: React.FC<SvgProps>;
  nameMeal: string;
} 

export const meals : Meal[] = [
  {
    icon: IconBreakfast,
    nameMeal: 'Café da manhã'
  },
  { 
    icon: IconMorningSpeedboat,
    nameMeal: 'Lanche da manha',
  },
  { 
    icon: IconLunch,
    nameMeal: 'Almoço'
  },
  { 
    icon: IconAfternoonSnack,
    nameMeal: 'Lanche da tarde'
  },
  {
    icon: IconDinner,
    nameMeal: 'Jantar'
  }
]