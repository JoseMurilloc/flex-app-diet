import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  background-color: ${({theme}) => theme.colors.card};
  height: 80px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0 14px;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const ButtonCancel = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 35px;
  padding: 8px 23px;
  margin-right: 10px;
`;
export const ButtonCancelText = styled.Text`
  color: ${({theme}) => theme.colors.description};
  font-size: ${({theme}) => theme.sizes.default}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;