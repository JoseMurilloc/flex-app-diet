import styled, { css } from 'styled-components/native';
import { Macros } from './types';

type MacroNameProps = {
  type: Macros;
}

export const NameMacro = styled.Text<MacroNameProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.default}px;
  opacity: 0.4;

  color: red;

  ${({type}) => type === 'protein' && css`
    color: ${({theme}) => theme.colors.nutritional.protein}
  `}
  ${({type}) => type === 'fat' && css`
    color: ${({theme}) => theme.colors.nutritional.fat}
  `}
  ${({type}) => type === 'cabos' && css`
    color: ${({theme}) => theme.colors.nutritional.cabos}
  `}

`;

export const ValueMacro = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.text};
`;

export const Container = styled.View.attrs(props => ({
  style: { 
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

  },
  elevation: 12,
}))`
  width: 71px;
  height: 71px;
  background-color: ${({theme}) => theme.colors.card};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;