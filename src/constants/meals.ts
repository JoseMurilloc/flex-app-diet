import IconBreakfast from '../assets/eggs.svg';
import IconMorningSpeedboat from '../assets/fruits.svg';
import IconLunch from '../assets/vegetables.svg';
import IconAfternoonSnack from '../assets/popcorn.svg';
import IconDinner from '../assets/dinner.svg';
import React from 'react';
import { SvgProps } from 'react-native-svg';

type Meal = {
  idMeal: string;
  Icon: React.FC<SvgProps>;
  nameMeal: string;
} 

export const meals : Meal[] = [
  {
    idMeal: "breakfast",
    Icon: IconBreakfast,
    nameMeal: 'Café da manhã'
  },
  { 
    idMeal: "morningSpeedboat",
    Icon: IconMorningSpeedboat,
    nameMeal: 'Lanche da manha',
  },
  { 
    idMeal: "lunch",
    Icon: IconLunch,
    nameMeal: 'Almoço'
  },
  { 
    idMeal: "afternoonSnack",
    Icon: IconAfternoonSnack,
    nameMeal: 'Lanche da tarde'
  },
  {
    idMeal: "dinner",
    Icon: IconDinner,
    nameMeal: 'Jantar'
  }
]