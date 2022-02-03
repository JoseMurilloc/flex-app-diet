import styled, { css } from 'styled-components/native';

export type WrapperPickerProps = {
  enabledPicker: boolean
}


export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.text};
`;

export const WrapperPicker = styled.View<WrapperPickerProps>`
  width: 130px;
  border-radius: 5px;
  height: 50px;
  border-color: ${({theme}) => theme.colors.card};

  ${({enabledPicker}) => enabledPicker ? css`
    background-color: ${({theme}) => theme.colors.card}; 
  `: css`
    background-color: ${({theme}) => theme.colors.card};
    opacity: 0.5;
  `}
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;
