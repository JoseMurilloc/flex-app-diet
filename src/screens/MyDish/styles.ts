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


export const  WrapperButton = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-top: 18px;
`;