import IconBreakfast from '../assets/eggs.svg';
import IconMorningSpeedboat from '../assets/fruits.svg';
import IconLunch from '../assets/vegetables.svg';
import IconAfternoonSnack from '../assets/popcorn.svg';
import IconDinner from '../assets/dinner.svg';
import React from 'react';
import { SvgProps } from 'react-native-svg';

type Meal = {
  icon: React.FC<SvgProps>;
  name: string;
} 

export const meals : Meal[] = [
  {
    icon: IconBreakfast,
    name: 'Café da manhã'
  },
  { 
    icon: IconMorningSpeedboat,
    name: 'Lanche da manha',
  },
  { 
    icon: IconLunch,
    name: 'Almoço'
  },
  { 
    icon: IconAfternoonSnack,
    name: 'Lanche da tarde'
  },
  {
    icon: IconDinner,
    name: 'Jantar'
  }
]