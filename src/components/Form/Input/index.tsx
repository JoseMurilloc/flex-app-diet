import React, { useCallback, useRef, useState } from 'react';
import { TextInputProps, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Container, WrapperInput } from './styles';
import theme from '../../../global/styles/theme';

import { Controller, Control } from "react-hook-form";

interface InputProps extends TextInputProps {
  control: Control | any;
  name: string;
}

export function Input ({ name, control,...rest}: InputProps) {
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
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value}}) => (
          <Container 
            onChangeText={onChange}
            value={value}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...rest}
          />
        )}
      />
    </WrapperInput>
  );
}
