import styled, { css } from 'styled-components/native';
import { useStatusBarHeight } from '../../hooks/useStatusBarHeight';
import { WrapperProps } from './types';

const marginStyles = (top: number, bottom: number) => css`
  margin-top: ${top}px;
  margin-bottom: ${bottom}px;  
`;

export const WrapperScreen = styled.View`
  flex: 1;
  position: relative;
  background: blue;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 24px;
  
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  min-height:${useStatusBarHeight(77)}px;
  width: 100%;
  padding-top: 42px;
  padding-bottom: 21px;
`;


export const Wrapper = styled.View<WrapperProps>`
  width: 100%;
  ${props => marginStyles(props.marginTop, props.marginBottom)}
  
  ${props => props.isCenter && css`
    justify-content: center;
    align-items: center;
  `}
`;

export const TitleToday = styled.Text`
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.description};
`;


export const MenuMeal = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;

  align-items: flex-end;
`;

export const WrapperCardsMeal = styled.View`
  flex: 1;
  width: 100%;
`;
