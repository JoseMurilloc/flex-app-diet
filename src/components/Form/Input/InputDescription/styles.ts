import { TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";

interface InputDescriptionProps extends TextInputProps {
  isFocused: boolean;
  isErrored: boolean;  
}

export const Container = styled.TextInput<InputDescriptionProps>`
  width: 100%;
  border-bottom-width: 1px;
  padding-bottom: 3px;
  
  ${props => props.isFocused ? css`
    border-bottom-color:  ${({theme}) => theme.colors.primary};  
  ` : css`
    border-bottom-color:  ${({theme}) => theme.colors.card};
  `}

  ${props => props.isErrored ? css`
    border-bottom-color:  ${({theme}) => theme.colors.status.error};
    border-bottom-width: 1.5px;  
  ` : css`
    border-bottom-color:  ${({theme}) => theme.colors.card};
  `}
`;