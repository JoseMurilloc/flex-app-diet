import React from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

type FlashMessageProps = {}

export function FlashMessage ({}: FlashMessageProps) {
  return (
    <Container>
      <Text>Hello world</Text>
    </Container>
  );
}
