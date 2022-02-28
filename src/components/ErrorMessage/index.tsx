import React from 'react';
import { Container } from './styles';

type ErrorMessageProps = {
  text: string;
}

export function ErrorMessage({text}: ErrorMessageProps) {
  return <Container>{text}</Container>;
}