import styled from "styled-components/native";
import theme from "../../../global/styles/theme";


type ContainerProps = {
  statusBarHeight: number;
} 

export const Container = styled.View<ContainerProps>`
  flex: 1;
  padding: 0 24px;
  padding-top: ${({statusBarHeight}) => statusBarHeight}px;
  align-items:center;
  position: relative;
  
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Header = styled.View`
  width: 100%;
`;

export const TitleHeader = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large + 4}px;
  color: ${({theme}) => theme.colors.background};
`;


export const Form = styled.View`
  position: absolute;
  bottom: 0;
`;
export const HeaderForm = styled.View`
  margin-bottom: 35px;
`;
export const Title = styled.Text`
  font-size: ${({theme}) => theme.sizes.large + 2}px;
  color: ${({theme}) => theme.colors.background};
  font-family: ${({theme}) => theme.fonts.bold};
`;
export const Description = styled.Text`
 font-size: ${({theme}) => theme.sizes.default + 1}px;
  color: ${({theme}) => theme.colors.background};
  font-family: ${({theme}) => theme.fonts.regular};

  margin-top: 10px;
  opacity: 0.8;
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background};
  height: 50px;
  margin-bottom: 15px;

  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const ButtonLoginText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.primary};
`; 

export const ButtonSignUp = styled.TouchableOpacity`
  width: 100%;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.background};
  border-width: 1px;
  height: 50px;

  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 30px;
`;
export const ButtonSignUpText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.background};
`;
