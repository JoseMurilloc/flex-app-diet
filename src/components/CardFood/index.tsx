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
  numberServing: number;
  caloriesTotalFood:  string;
}

export function CardFood({ 
  nameFood,
  numberServing,
  caloriesTotalFood,
  ...rest
}: CardMealProps) {
  return (
    <Container>
      <WrapperContent {...rest}>
        <Content>
          <NameFood>{nameFood}</NameFood>
          <CalorieTotalFood>{`${numberServing}g`}</CalorieTotalFood>
        </Content>
        <CaloriesTotalFood>
          {`${caloriesTotalFood}cal`}
        </CaloriesTotalFood>
      </WrapperContent>
    </Container>
  )
} 