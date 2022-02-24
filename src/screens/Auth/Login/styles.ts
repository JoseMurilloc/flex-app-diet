import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 24px;
  width: 100%;
  align-items:center;
  justify-content: space-between;
  position: relative;
  
  background-color: ${({theme}) => theme.colors.background};
`;


export const Header = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export const TitleHeader = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large + 4}px;
  color: ${({theme}) => theme.colors.primary};
`;


export const Form = styled.View`
  width: 100%;
`;

export const DescriptionHeader = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.description};
`;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  height: 50px;
  margin-bottom: 15px;

  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 100%;
`;
export const ButtonLoginText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.background};
`; 

export const ButtonSignUp = styled.TouchableOpacity`
  width: 100%;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.primary};
  border-width: 1px;
  height: 50px;
  background-color: ${({theme}) => theme.colors.card};

  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 30px;
`;
export const ButtonSignUpText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.primary};
`;
