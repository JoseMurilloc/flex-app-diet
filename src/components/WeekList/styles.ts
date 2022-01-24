import { lighten } from 'polished';
import styled, { css } from 'styled-components/native';
import { CardDayProps } from './types';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  width: 77%;
  background-color: ${({theme}) => theme.colors.card};
`;

export const CardDay = styled.TouchableOpacity<CardDayProps>`
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.card};
  padding: 9px;
  width: 89px;
  height: 34px;


  ${({isActive, theme}) => isActive && css`
    background: #FFFFFF;
    border: 1px solid ${lighten(0.2, theme.colors.primary)};
    border-radius: 4px;
  `}
`;

export const CardDayText = styled.Text<CardDayProps>`
  font-size: ${({theme}) => theme.sizes.small}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.description};


  ${props => props.isActive && css`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.bold};
  `}
`;
