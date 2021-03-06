import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 24px;
  padding-top: 37px;
  width: 100%;
  align-items:center;
  position: relative;
  
  background-color: ${({theme}) => theme.colors.background};
`;

export const ErrorMessage = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.default}px;
  color: ${({theme}) => theme.colors.status.error};
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
  color: ${({theme}) => theme.colors.primary};
`;


export const Form = styled.View`
  width: 100%;
  flex: 1;
  position: relative;
`;

export const ButtonContinue = styled.TouchableOpacity`
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
export const ButtonContinueText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.background};
  margin-right: 8px;
`; 
export const ButtonBack = styled.TouchableWithoutFeedback``