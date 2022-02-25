import React, { 
  useCallback, 
  useEffect, 
  useMemo,
  useState 
} from 'react';
import { Control, Controller, useForm } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { 
  Container,
  WrapperInput,
  WrapperGlobal,
  Title
} from './styles';
import theme from '../../../global/styles/theme';

import { Feather } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  control: Control | any;
  name: string;
  title: string;
  nameIcon: any;
  errors: any;
}


export function Input ({ errors, control, title, name, nameIcon, ...rest}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  
  const handleInputFocus = useCallback(() => setIsFocused(true), []);
  const handleInputBlur = useCallback(() => setIsFocused(false), []);

  useEffect(() => {
    setIsErrored(!!errors)
  }, [errors])

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
          render={({ field: { onChange, value}}) => (
            <>
              <Feather 
                name={nameIcon} 
                size={24} 
                color={isErrored ? theme.colors.status.error : theme.colors.primary} 
                style={{ marginRight: 5}}
              />
              <Container
                onChangeText={onChange}
                value={value} 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest}
              />
            </>
          )}
      />
      </WrapperInput>
    </WrapperGlobal>
  );
}
