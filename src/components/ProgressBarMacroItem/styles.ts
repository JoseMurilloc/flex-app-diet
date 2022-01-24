import styled from 'styled-components/native';

export const Container = styled.View``;

export const MacroName = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.sizes.default}px;
`;
