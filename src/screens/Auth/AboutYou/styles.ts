import styled from 'styled-components/native';
import theme from '../../../global/styles/theme';

type ContainerProps = {
  statusBarHeight: number;
} 

export const Container = styled.View<ContainerProps>`
  flex: 1;
  padding: 0 24px;
  padding-top: ${({statusBarHeight}) => statusBarHeight}px;
  width: 100%;
  align-items:center;
  position: relative;
  
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: 40px;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const TitleHeader = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large + 4}px;
  color: #1D115C;
`;


export const Form = styled.View`
  width: 100%;
  margin-top: 39px;
  flex: 1;
`
export const Section = styled.View`
  margin-bottom: 40px;
`;
export const TitleSection = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.sizes.large}px;
`;
export const ContentSection = styled.View`
  margin-top: 12px;
  margin-bottom: 40px;
`;

export const ButtonFinally = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  height: 50px;
  margin-bottom: 15px;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 100%;

  position: absolute;
  bottom: 0;
`;
export const ButtonFinallyText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.background};
  margin-right: 8px;
`; 