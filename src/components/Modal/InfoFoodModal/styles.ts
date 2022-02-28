import styled from 'styled-components/native';

export const ContainerModal = styled.View`
  background-color: #FFF; 
  width: 100%;
  min-height: 400px;
  border-radius: 15px;
`;

export const Header = styled.View`
  padding: 20px 19px 16px 16px; 
  width: 100%;
  border: 0.5px solid rgba(120, 120, 120, 0.3);
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
`;

export const ContentForm = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px 19px 0px 16px;
`;

export const TitleHeader = styled.Text` 
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.large + 3}px;
  color: ${({theme}) => theme.colors.text};
`;

export const GenericWrapperInput = styled.View``;

export const WrapperAmountMetric = styled.View`
  width: 100%;
  height: 95px;
  flex-direction: row;
`;

export const ContainerMacro = styled.View`
  width: 75%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const  ContainerCalorieTotal = styled.View`
  margin-top: 16px;
`;
