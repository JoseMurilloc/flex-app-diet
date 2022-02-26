import { lighten } from 'polished';
import styled from 'styled-components/native';
import { MotiView } from 'moti'

export const Container = styled(MotiView).attrs(props => ({
  from: { bottom: -261 },
  animate: {  bottom: 0 },
  transition: { type: 'timing', duration: 50 },
}))`
  position: relative;

  background-color: ${({theme}) => theme.colors.card};
  background-color: #f1f1f1;
  width: 100%;
  padding: 0 16px; 
`;

export const Header = styled.View`
  width: 100%;
  padding: 8px 0px 8px 0px;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${({theme}) => theme.sizes.large + 2}px;
`;

export const Meal = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 3px 0px 3px 0px;
  margin-bottom: 12px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.sizes.default + 2}px;
  margin-left: 4px;
`;