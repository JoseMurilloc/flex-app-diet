import React, { useCallback, useRef, useState } from 'react';
import { TextInputProps, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Container, WrapperInput } from './styles';
import theme from '../../../global/styles/theme';

export function Input ({...rest}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => setIsFocused(true), []);
  const handleInputBlur = useCallback(() => setIsFocused(false), []);


  return (
    <WrapperInput 
      isFocused={isFocused}
      isErrored={false}
    >
      <AntDesign 
        name="search1" 
        size={15} 
        color={isFocused ? theme.colors.primary : theme.colors.description}
        style={{marginRight: 5}} 
      />
      <Container 
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </WrapperInput>
  );
}
