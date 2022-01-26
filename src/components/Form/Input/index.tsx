import React from 'react';
import { TextInputProps, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Container, WrapperInput } from './styles';
import theme from '../../../global/styles/theme';

export function Input ({...rest}: TextInputProps) {
  return (
    <WrapperInput>
      <AntDesign 
        name="search1" 
        size={15} 
        color={theme.colors.description}
        style={{marginRight: 5}} 
      />
      <Container {...rest}/>
    </WrapperInput>
  );
}
