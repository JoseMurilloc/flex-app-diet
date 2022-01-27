import styled from "styled-components/native";
import { MotiView } from 'moti';

export const Container = styled(MotiView).attrs(props => ({
  from: {opacity: 0, bottom: -100},
  animate: { opacity: 1, bottom: 0},
  transition: { type: 'timing', duration: 500 },
  style: { elevation: 10 }
}))`
  width: 100%;
  background-color: ${({theme}) => theme.colors.card};
  height: 69px;
  border-radius: 8px;

  align-items: center;
  padding: 12px 23px 16px 19px;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const Content = styled.View`
  margin-left: 4px;
  flex: 1;
`;

export const NameFood = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.description};
  font-size: ${({theme}) => theme.sizes.large}px;
`;

export const CalorieTotalFood = styled.Text`
  color: ${({theme}) => theme.colors.description};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.sizes.default}px;
`;

export const CaloriesTotalFood = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({theme}) => theme.sizes.default}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;