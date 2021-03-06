import { lighten } from 'polished';
import styled, { css } from 'styled-components/native';

type WrapperInputProps = {
  isFocused: boolean;
  isErrored: boolean;
}

export const WrapperInput = styled.View<WrapperInputProps>`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  padding: 7px 0px 7px 20px;
  background-color: ${({theme}) => theme.colors.card};
  
  flex-direction: row;
  align-items: center;
  
  ${props => props.isFocused ? css`
    border-color: ${({theme}) => theme.colors.primary};
    border-width: 0.5px;
  ` : css`
    border-color: ${({theme}) => theme.colors.card};
    border-width: 0.5px;
  `}
`;

export const Container = styled.TextInput.attrs(props => ({}))`
  width: 100%;
  height: 100%;
`;
