import styled from "styled-components/native";

type ContainerProps = {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${({theme}) => theme.colors.primary};
  height: 35px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  padding: 8px 23px;

  opacity: ${({isActive}) => !isActive ? 0.3: 1};
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.default + 2}px;
`;
