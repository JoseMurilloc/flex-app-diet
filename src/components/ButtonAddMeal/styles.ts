import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 65px;
  background-color: ${({theme}) => theme.colors.primary};
  height: 65px;
  border-radius: 40px;

  justify-content: center;
  align-items: center;
  margin-right: 19px;
`;