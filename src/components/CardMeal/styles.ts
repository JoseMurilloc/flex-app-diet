import { lighten } from "polished";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: 1
}))`
  position: relative;
  width: 250px;
  max-height: 350px;
  
  background-color: ${({theme}) => theme.colors.card};
  border: 0.5px solid ${({theme}) => theme.colors.border};
  border-radius: 8px;

  align-items: flex-start;
  margin-right: 20px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  border-color: ${({theme}) => theme.colors.border};
  padding-left: 12px;
  padding-right: 8px;
`;

export const TitleHeader = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.title}px;
  color: #646464;
`;


export const Footer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  padding-top: 0;
`;

export const CaloriesFire = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CaloriesFireValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: #d24b4b;
`;

export const TimeMeal = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TimeMealValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.primary};
`;

export const Main = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 10px;
  padding: 12px;
`;

export const FoodText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.default + 2}px;
`;

export const Menu = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 16px; 

  width: 89px;
  max-height: 110px;
  z-index: 1000;

  border-radius: 10px;

  background: white;
  background-color: ${({theme}) => lighten(0.18, theme.colors.primary)};
`;

export const ButtonMenu = styled.TouchableOpacity`
  margin-bottom: 12px;
`; 

export const ButtonMenuOption = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.text};
  color: white;
`; 