import React, { useCallback, useEffect, useState } from 'react';
import { TextInputProps } from 'react-native';

import { 
  Container,
  WrapperInput,
  WrapperGlobal,
  Title
} from './styles';


interface InputProps extends TextInputProps {
  title: string;
  error?: boolean;
}

export function Input ({ title, error = false, ...rest}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  
  const handleInputFocus = useCallback(() => setIsFocused(true), []);
  const handleInputBlur = useCallback(() => setIsFocused(false), []);

  useEffect(() => {
    setIsErrored(error)
  }, [error])

  return (
    <WrapperGlobal>
      <Title>{error ? `${title} *` : title}</Title>
      <WrapperInput 
        isFocused={isFocused}
        isErrored={isErrored}
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
