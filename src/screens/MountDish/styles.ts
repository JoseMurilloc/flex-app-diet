import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  
  background-color: ${({theme}) => theme.colors.background};
`;

export const WrapperInput = styled.View`
  width: 100%;
  margin-top: 24px;
`;

export const ContentFoods = styled.View`
  flex: 1;
`;


export const Title = styled.Text`
  color: ${({theme}) => theme.colors.description};
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const TitleJoinLine = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 22px;
  margin-top: 12px;
`
export const Line = styled.View`
  flex: 1;
  height: 1px;
  width: 100%;
  background-color: #757575;
  margin-left: 2px;
`
export const WrapperCardFood = styled.View`
  flex: 1;
`;

export const WrapperMessageNotFound = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 32px;
`;

export const TitleNotFound = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.text};
`;

export const DescriptionNotFound = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.default}px;
  color: ${({theme}) => theme.colors.description};
  text-align: center;
  margin-top: 2px;
  width: 275px;
`;

