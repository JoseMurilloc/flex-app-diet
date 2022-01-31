import styled from 'styled-components/native';

export const Container = styled.View`
  width: 71px;
  height: 71px;
  background-color: ${({theme}) => theme.colors.card};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const NameMacro = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.sizes.default}px;
  color: ${({theme}) => theme.colors.text};
`;

export const ValueMacro = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.text};
`;