import { lighten } from "polished";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.card};
  border: 0.5px solid ${({theme}) => lighten(0.2, theme.colors.primary)};
  height: 69px;
  border-radius: 8px;

  align-items: center;
  padding: 12px 23px 16px 19px;
  flex-direction: row;
`;

export const Content = styled.View`
  margin-left: 4px;
  flex: 1;
`;

export const NameMeal = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.description};
  font-size: ${({theme}) => theme.sizes.default}px;
`;

export const CalorieTotalMeal = styled.Text`
  color: ${({theme}) => theme.colors.calorie};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.default}px;
`;
