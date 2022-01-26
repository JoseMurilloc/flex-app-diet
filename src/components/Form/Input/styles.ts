import styled from 'styled-components/native';

export const WrapperInput = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${({theme}) => theme.colors.card};
  border-radius: 30px;
  padding: 7px 0px 7px 20px;

  flex-direction: row;
  align-items: center;
`;

export const Container = styled.TextInput.attrs(props => ({}))`
  width: 100%;
  height: 100%;
`;
