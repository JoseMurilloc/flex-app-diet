import { TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";

interface InputDescriptionProps extends TextInputProps {
  isFocused: boolean;
  isErrored?: boolean;  
}

export const Container = styled.TextInput<InputDescriptionProps>`
  width: 100%;
  border-bottom-width: 1px;
  padding-bottom: 3px;
  
  ${({isFocused}) => isFocused ? css`
    border-bottom-color:  ${({theme}) => theme.colors.primary};  
  ` : css`
    border-bottom-color:  ${({theme}) => theme.colors.card};
  `}
`;