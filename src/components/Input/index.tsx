import React, { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';

import { 
  Container,
  WrapperInput,
  WrapperGlobal,
  Title
} from './styles';


interface InputProps extends TextInputProps {
  title: string;
}

export function Input ({ title, ...rest}: InputProps) {
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
      <Container 
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </WrapperInput>
    </WrapperGlobal>
  );
}
