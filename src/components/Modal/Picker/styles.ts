import styled, { css } from 'styled-components/native';

type WrapperInputProps = {
  isFocused: boolean;
  isErrored: boolean;
}


export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.text};
`;

export const WrapperInput = styled.View`
  width: 130px;
  border-radius: 20px;
  height: 50px;
  background-color: ${({theme}) => theme.colors.card};
  border-color: ${({theme}) => theme.colors.card};
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;
