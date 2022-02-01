import { TouchableOpacityProps } from "react-native";
import { 
  Container,
  Content,
  NameFood,
  CalorieTotalFood, 
  CaloriesTotalFood,
  WrapperContent
} from "./styles";


interface CardMealProps extends TouchableOpacityProps {
  nameFood: string;
  gram: number;
  caloriesTotalFood: number;
}

export function CardFood({ 
  nameFood,
  gram,
  caloriesTotalFood,
  ...rest
}: CardMealProps) {
  return (
    <Container>
      <WrapperContent {...rest}>
        <Content>
          <NameFood>{nameFood}</NameFood>
          <CalorieTotalFood>{`${gram}g`}</CalorieTotalFood>
        </Content>
        <CaloriesTotalFood>
          {`${caloriesTotalFood}cal`}
        </CaloriesTotalFood>
      </WrapperContent>
    </Container>
  )
} 