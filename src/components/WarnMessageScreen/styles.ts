import styled from 'styled-components/native';

export const MessageNotMealFound = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.sizes.large}px;
  color: ${({theme}) => theme.colors.text};
`;

export const DescriptionNotMealFound = styled.Text`
  width: 247px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.sizes.default}px;
  color: ${({theme}) => theme.colors.description};

  text-align: center;
`;
