import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  height: 35px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  padding: 8px 23px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.default + 2}px;
`;
