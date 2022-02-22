import { MotiView } from 'moti';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  position: absolute;

  border: 0.5px solid #D6D6D6;
  width: 200px;
  height: 40px;
  border-radius: 20px;

  justify-content: space-between;
  align-items: center;
`;

export const ActiveGenre = styled(MotiView)`
  background-color: ${({theme}) => theme.colors.primary};
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0%;
  border-radius: 20px;
`;

export const ButtonSelectGenre = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`; 

type ButtonSelectGenreTextProps = {
  activeGenre: boolean;
}

export const ButtonSelectGenreText = styled.Text<ButtonSelectGenreTextProps>`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.default}px;
  
  ${props => props.activeGenre ? css`
    color: ${({theme}) => theme.colors.background};
  `: css`
    color: ${({theme}) => theme.colors.text};
  `}

`;