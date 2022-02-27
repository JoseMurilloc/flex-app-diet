import React from 'react';
import LottieView from 'lottie-react-native';
import { Container } from './styles';

export function LoadAnimated() {
  return (
    <Container>
      <LottieView
        source={require("../../assets/loadingFood.json")}
        style={{ width: 200 }}
        autoPlay
        loop
      />
    </Container>
  );
}