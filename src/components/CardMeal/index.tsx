import { 
  Container,
  Content,
  NameMeal,
  CalorieTotalMeal, 
} from "./styles";
import IconBreakfast from '../../assets/eggs.svg';
import { AntDesign } from '@expo/vector-icons';
import theme from "../../global/styles/theme";

export function CardMeal() {
  return (
    <Container>
      <IconBreakfast width="35" height="35" />
      <Content>
        <NameMeal>Café da manha</NameMeal>
        <CalorieTotalMeal>350 cal</CalorieTotalMeal>
      </Content>
      <AntDesign 
        name="down" 
        size={24} 
        color={theme.colors.description} 
      />
    </Container>
  )
} 