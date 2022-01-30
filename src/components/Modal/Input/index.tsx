import React, { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';

import { 
  Container,
  WrapperInput,
  WrapperGlobal,
  Title
} from './styles';

import { Controller, Control } from "react-hook-form";

interface InputProps extends TextInputProps {
  control: Control | any;
  name: string;
  title: string;
}

export function Input ({ name, control, title, ...rest}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const handleInputFocus = useCallback(() => setIsFocused(true), []);
  const handleInputBlur = useCallback(() => setIsFocused(false), []);


  return (
    <WrapperGlobal>
      <Title>{title}</Title>
      <WrapperInput 
        isFocused={isFocused}
        isErrored={false}
      >
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value }}) => (
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
    </WrapperGlobal>
  );
}
