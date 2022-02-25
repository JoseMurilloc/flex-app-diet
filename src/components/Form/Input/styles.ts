import styled, { css } from 'styled-components/native';

type WrapperInputProps = {
  isFocused: boolean;
  isErrored: boolean;
}

export const WrapperGlobal = styled.View`
  width: 100%;
  height: 50px;
`;


export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.default}px;
  color: ${({theme}) => theme.colors.description};
`;

export const WrapperInput = styled.View<WrapperInputProps>`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  padding: 7px 0px 7px 12px;
  background-color: ${({theme}) => theme.colors.card};
  background-color: #f1f1fc;
  
  flex-direction: row;
  align-items: center;
  
  border-color: ${({theme}) => theme.colors.card};
  border-width: 0.5px;
  
  ${props => props.isFocused && css`
    border-color: ${({theme}) => theme.colors.primary};
    border-width: 0.5px;
  `}

  ${props => props.isErrored && css`
    border-color: ${({theme}) => theme.colors.status.error};
    border-width: 1px;
  `}
`;

export const Container = styled.TextInput.attrs(props => ({}))`
  width: 100%;
  height: 100%;
`;
