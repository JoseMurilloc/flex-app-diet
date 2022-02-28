import styled from "styled-components/native";

export const Container = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.default}px;
  color: ${({theme}) => theme.colors.status.error};
  width: 100%;  
`;