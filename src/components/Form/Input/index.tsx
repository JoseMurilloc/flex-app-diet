import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Control, Controller, useForm } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { 
  Container,
  WrapperInput,
  WrapperGlobal,
  Title
} from './styles';


interface InputProps extends TextInputProps {
  control: Control | any;
  name: string;
  title: string;
}


export function Input ({ control, title, name, ...rest}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  
  const handleInputFocus = useCallback(() => setIsFocused(true), []);
  const handleInputBlur = useCallback(() => setIsFocused(false), []);

  const { formState: { errors } } = useForm()

  const haveError = useMemo(() => errors.length > 0, [errors])

  return (
    <WrapperGlobal>
      <Title>{haveError ? `${title} *` : title}</Title>
      <WrapperInput 
        isFocused={isFocused}
        isErrored={isErrored}
      >
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
    </WrapperGlobal>
  );
}
