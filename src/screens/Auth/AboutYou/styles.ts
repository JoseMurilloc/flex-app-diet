import styled from 'styled-components/native';
import theme from '../../../global/styles/theme';


export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 24px;
  padding-top: 37px;
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
  color: ${({theme}) => theme.colors.primary};
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

export const HeaderSection = styled.View`
  flex-direction: row;
  width: 100%; 
  justify-content: space-between;
  align-items: center;
`;

export const UnitWeight = styled.View`
  width: 55px;
  height: 25px;
  border: 1px solid rgba(64, 64, 64, 0.3);
  border-radius: 30px;

  justify-content: center;
  align-items: center;
`;

export const UnitWeightText = styled.Text`
  font-size: ${({theme}) => theme.sizes.default}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.description};
`;