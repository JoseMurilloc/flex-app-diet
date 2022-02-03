import React, { useState } from 'react';
import {Picker, PickerProps} from '@react-native-picker/picker';

import { 
  Container,
  WrapperPicker,
  Title
} from './styles';

import { Controller, Control, useForm } from "react-hook-form";
import { StyleSheet } from 'react-native';
import theme from '../../../global/styles/theme';
import { Food } from '../../../contexts/meals/types';

interface PickerMetricProps extends PickerProps {
  control: Control | any;
  name: string;
  title: string;
  enabled: boolean;
  onValueChange?: (itemValue: any, itemIndex: number) => void;
  food?: Food;
}

const itens = [
  { label: "Grama", value: "gram" },
  { label: "Unidade", value: "unit" }
]

export function PickerMetric ({
  name,
  control,
  title,
  enabled,
  onValueChange,
  food,
  ...rest
}: PickerMetricProps) {
  return (
    <Container>
      <Title>Medida</Title>
      <WrapperPicker enabledPicker={enabled}>
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange }}) => (
            <Picker
              {...rest}
              selectedValue={value}
              onValueChange={onValueChange}
              enabled={enabled}
              style={[styles.containerPicker, 
                enabled ? styles.colorEnabled : styles.colorDisabled
              ]}
              // selectedValue={""}
            >
              {itens.map((item) => (
                <Picker.Item label={item.label} value={item.value} />
              ))}
            </Picker>
          )}
        />
      </WrapperPicker>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerPicker: {
    height: '100%',
    width: '100%',
  },
  colorEnabled: {
    color: theme.colors.text,
  },
  colorDisabled: {
    color: theme.colors.description,
  },
})