import { 
  Container,
  Content,
  NameMeal,
  CalorieTotalMeal, 
} from "./styles";
import IconBreakfast from '../../assets/eggs.svg';
import { AntDesign } from '@expo/vector-icons';
import theme from "../../global/styles/theme";
import { SvgProps } from "react-native-svg";

type CardMealProps = {
  nameMeal: string;
  caloriesTotal: number;
  Icon: React.FC<SvgProps>
}

export function CardMeal({ nameMeal, caloriesTotal, Icon }: CardMealProps) {
  return (
    <Container>
      <Icon width="35" height="35" />
      <Content>
        <NameMeal>{nameMeal}</NameMeal>
        <CalorieTotalMeal>{`${caloriesTotal} cal`}</CalorieTotalMeal>
      </Content>
      <AntDesign 
        name="down" 
        size={24} 
        color={theme.colors.description} 
      />
    </Container>
  )
} 