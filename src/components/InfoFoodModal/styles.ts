import styled from 'styled-components/native';

export const ContainerModal = styled.View`
  background-color: #FFF; 
  width: 100%;
  height: 350px;
`;

export const Header = styled.View`
  padding: 20px 19px 16px 16px; 
  width: 100%;
  border: 0.5px solid rgba(120, 120, 120, 0.3);
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px 19px 16px 16px;
`;

export const TitleHeader = styled.Text` 
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.large + 3}px;
  color: ${({theme}) => theme.colors.text};
`;

export const GenericWrapperInput = styled.View``;

export const WrapperAmountMetric = styled.View`
  width: 100%;
  height: 85px;
  flex-direction: row;
`;

export const ContainerMacro = styled.View`
  width: 75%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* background-color: rgba(255, 32, 255, 0.4); */
`;

export const  ContainerCalorieTotal = styled.View`
  margin-top: 16px;
`;

export const ContainerButton = styled.View`
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
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.sizes.default}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;