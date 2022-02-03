import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 11px;
`;

export const CalorieTotalText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.text};
`;

export const Line = styled.View`
  flex: 1;
  height: 1px;
  width: 100%;
  background-color: #757575;
  margin-left: 3px;
  margin-right: 6px;
`;
export const CalorieTotalValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.default + 2}px;
  color: ${({theme}) => theme.colors.primary};
`;