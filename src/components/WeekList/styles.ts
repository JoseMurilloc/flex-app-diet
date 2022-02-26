import { lighten } from 'polished';
import styled, { css } from 'styled-components/native';
import { CardDayProps } from './types';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  border-radius: 8px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.card};
  height: 42px;
`;

export const CardDay = styled.TouchableOpacity<CardDayProps>`
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.card};
  padding: 9px;
  width: 33%;
  height: 100%;


  ${({isActive, theme}) => isActive && css`
    background: ${({theme}) => theme.colors.primary};
    border: 1px solid ${lighten(0.2, theme.colors.primary)};
    border-radius: 4px;
  `}
`;

export const CardDayText = styled.Text<CardDayProps>`
  font-size: ${({theme}) => theme.sizes.default}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.description};


  ${props => props.isActive && css`
    color: #FFF;
    font-family: ${({theme}) => theme.fonts.bold};
  `}
`;
