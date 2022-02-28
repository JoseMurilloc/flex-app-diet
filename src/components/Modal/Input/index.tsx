import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { TextInputProps } from 'react-native';

import { 
  Container,
  WrapperInput,
  WrapperGlobal,
  Title
} from './styles';

import { Controller, Control } from "react-hook-form";
import { TextInput } from 'react-native';

interface InputProps extends TextInputProps {
  control: Control | any;
  name: string;
  title: string;
  errors: any;
}

export const Input = forwardRef(({ errors, name, control, title, ...rest}: InputProps, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  
  const handleInputFocus = useCallback(() => setIsFocused(true), []);
  const handleInputBlur = useCallback(() => setIsFocused(false), []);

  const inputRef = useRef<TextInput>(null);


  useEffect(() => {
    setIsErrored(!!errors)
  }, [errors])


  useImperativeHandle(ref, () => ({
    focusNextInput() {
      inputRef.current?.focus();
    }
  }))


  return (
    <WrapperGlobal>
      <Title>{title}</Title>
      <WrapperInput 
        isFocused={isFocused}
        isErrored={isErrored}
      >
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value }}) => (
            <Container 
              ref={inputRef}
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
})
