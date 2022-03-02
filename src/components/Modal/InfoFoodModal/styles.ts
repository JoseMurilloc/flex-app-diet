import styled from 'styled-components/native';

export const ContainerModal = styled.View`
  background-color: #FFF; 
  width: 100%;
  min-height: 400px;
  border-radius: 15px;
`;

export const Header = styled.View`
  padding: 20px 19px 16px 16px; 
  width: 100%;
  border: 0.5px solid rgba(120, 120, 120, 0.3);
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
`;

export const ContentForm = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px 19px 0px 16px;
`;

export const TitleHeader = styled.Text` 
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.large + 3}px;
  color: ${({theme}) => theme.colors.text};
`;

export const GenericWrapperInput = styled.View``;

export const WrapperAmountMetric = styled.View`
  width: 100%;
  height: 95px;
  flex-direction: row;
`;

export const ContainerMacro = styled.View`
  width: 75%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const  ContainerCalorieTotal = styled.View`
  margin-top: 16px;
`;


export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  background-color: ${({theme}) => theme.colors.card};
  height: 80px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0 14px;
`;

export const FooterButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const FooterButtonCancel = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 35px;
  padding: 8px 23px;
  margin-right: 10px;
`;

export const FooterButtonCancelText = styled.Text`
  color: ${({theme}) => theme.colors.description};
  font-size: ${({theme}) => theme.sizes.default}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

