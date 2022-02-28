import { TextInputProps } from 'react-native';
import styled, { css } from 'styled-components/native';

export const ContainerModal = styled.View`
  background-color: #FFF; 
  width: 100%;
  height: 500px;
  border-radius: 15px;
`;

export const Header = styled.View`
  padding: 20px 19px 16px 16px; 
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
`;

export const WrapperInputDescription = styled.View`
  width: 100%;
  margin: 0 0 15px 0;
`;


interface InputDescriptionProps extends TextInputProps {
  isFocused: boolean;
  isErrored?: boolean;  
}

export const InputDescription = styled.TextInput<InputDescriptionProps>`
  width: 100%;
  border-bottom-width: 1px;
  padding-bottom: 3px;
  
  ${({isFocused}) => isFocused ? css`
    border-bottom-color:  ${({theme}) => theme.colors.primary};  
  ` : css`
    border-bottom-color:  ${({theme}) => theme.colors.card};
  `}
`;

export const TitleHeader = styled.Text` 
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.large + 3}px;
  color: ${({theme}) => theme.colors.text};
`;

export const ContentForm = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px 19px 0px 16px;
`;

export const GenericWrapperInput = styled.View`
  width: 100%;
  height: 100%;
`;

export const WrapperInputsLine = styled.View`
  width: 100%;
  height: 105px;
  flex-direction: row;
  justify-content: space-between;
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

export const ContainerButton = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const ButtonCancel = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 35px;
  padding: 8px 23px;
  margin-right: 10px;
`;
export const ButtonCancelText = styled.Text`
  color: ${({theme}) => theme.colors.description};
  font-size: ${({theme}) => theme.sizes.default}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const InfoNutritional = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 13px;
  margin-bottom: 10px;
`;

export const InfoNutritionalText = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: #757575;
`;

export const InfoNutritionalLine = styled.View`
  flex: 1;
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.card};
  margin-left: 3px;
  margin-right: 6px;
`;