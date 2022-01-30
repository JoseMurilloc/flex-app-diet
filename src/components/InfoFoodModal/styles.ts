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
  flex-direction: row;
  width: 100%;
  padding: 20px 19px 16px 16px;
  height: 100%; 
`;

export const TitleHeader = styled.Text` 
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.large + 3}px;
  color: ${({theme}) => theme.colors.text};
`;

export const GenericWrapperInput = styled.View``;

export const WrapperAmountMetric = styled.View`
  width: 100%;
  flex-direction: row;
`;