import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInput, TextInputProps } from 'react-native';
import { Container } from './styles';

interface InputProps extends TextInputProps {
  control: Control | any;
  name: string;
  errors?: any;
}


export const InputDescription = forwardRef(({ name, control, errors, ...rest}: InputProps, ref) => {

  const [isFocused, setIsFocused] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  
  const handleInputFocus = useCallback(() => setIsFocused(true), []);
  const handleInputBlur = useCallback(() => setIsFocused(false), []);

  const inputRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => ({
    focusNextInput() {
      inputRef.current?.focus();
    }
  }))


  return (
    <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }}) => (
          <Container
            ref={inputRef}
            placeholder="Descrição"
            autoCorrect={false} 
            value={value}
            onChangeText={onChange}
            isFocused={isFocused}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...rest}
        />
        )}
      />
  );
})