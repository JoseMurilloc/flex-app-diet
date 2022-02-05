import styled from 'styled-components/native';

type ContainerProps = {
  statusBarSize: number;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};

  margin-top: ${({statusBarSize}) => statusBarSize}px;
  height: 60px;

  flex-direction: row;
  align-items: center;

  padding: 0 24px;
`;

export const ButtonBack = styled.TouchableOpacity`
  width: 35px;
  height: 35px;

  justify-content: center;
  align-items: center;
`;

export const TitleHeader = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.sizes.large + 2}px;
  color: #FFF;
`;

export const WrapperTitleHeader = styled.View`
  flex: 1;
  align-items: center;
`;