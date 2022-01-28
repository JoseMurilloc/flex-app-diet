import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 24px;
  
  background-color: ${({theme}) => theme.colors.background};

`;

export const Header = styled.View`
  margin-top: 23px;
  width: 100%;
`;

export const TitleHeader = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.sizes.large}px;
`;

export const DescriptionHeader = styled.Text`
  color: ${({theme}) => theme.colors.description};
  font-size: ${({theme}) => theme.sizes.default}px;
  width: 261px;
`;

export const Main = styled.View`
  width: 100%;
  height: 140px;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 11px;
`;

export const CalorieTotalText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.default}px;
  color: ${({theme}) => theme.colors.text};
`;

export const Line = styled.View`
  flex: 1;
  height: 0.5px;
  width: 100%;
  background-color: #757575;
  margin-left: 3px;
  margin-right: 6px;
`;
export const CalorieTotal = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.default + 2}px;
  color: ${({theme}) => theme.colors.primary};
`;

export const  WrapperButton = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-top: 18px;
`;