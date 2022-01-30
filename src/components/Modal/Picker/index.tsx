import React, { useState } from 'react';
import {Picker, PickerProps} from '@react-native-picker/picker';

import { 
  Container,
  WrapperInput,
  Title
} from './styles';

import { Controller, Control, useForm } from "react-hook-form";

interface Props extends PickerProps {
  control: Control | any;
  name: string;
  title: string;
}

export function PickerMetric ({ name, control, title, ...rest}: Props) {
  const { setValue } = useForm();

  return (
    <Container>
      <Title>Medida</Title>
      <WrapperInput>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value}}) => (
            <Picker
              {...rest}
              selectedValue={value}
              onValueChange={(itemValue, itemIndex) => {
                setValue(name, itemValue)}
              }
              style={{height: '100%', width: '100%'}}
            >
              <Picker.Item label="Grama" value="gram" />
              <Picker.Item label="Unidade" value="unit" />
            </Picker>
          )}
        />
      </WrapperInput>
    </Container>
  );
}
