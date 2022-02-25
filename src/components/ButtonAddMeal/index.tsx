import React from 'react';
import { Container } from './styles';

import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

interface ButtonAddMealProps extends TouchableOpacityProps {
  openMenuMeal: boolean;
  handleOpenMenu: () => void;
}

export function ButtonAddMeal({handleOpenMenu, openMenuMeal, ...rest}: ButtonAddMealProps) {
  return (
    <Container
      style={!openMenuMeal && { marginBottom: 100 }}
      {...rest}
    >
      {openMenuMeal ? (
        <AntDesign 
          name="down"
          size={24}
          color="#FFF" 
        />
      ) : (
        <Entypo 
          name="plus"
          size={24} 
          color="#FFFFFF" 
          onPress={handleOpenMenu}
        />
      )}
    </Container>
  );
}