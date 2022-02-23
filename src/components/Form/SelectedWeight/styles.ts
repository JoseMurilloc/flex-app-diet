import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%; 
  margin-top: 18px;
`;

export const WeightItem = styled.Text`
  margin-left: 16px;
  margin-right: 16px;
  color: ${({theme}) => theme.colors.primary};
  opacity: 0.5;
  font-family: ${({theme}) => theme.fonts.regular};
`;