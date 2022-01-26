import { 
  Container,
  Content,
  NameFood,
  CalorieTotalFood, 
  CaloriesTotalFood,
} from "./styles";


type CardMealProps = {
  nameFood: string;
  gram: number;
  caloriesTotalFood: number;
}

export function CardFood({ nameFood, gram, caloriesTotalFood }: CardMealProps) {
  return (
    <Container>
      <Content>
        <NameFood>{nameFood}</NameFood>
        <CalorieTotalFood>{`${gram}g`}</CalorieTotalFood>
      </Content>
      <CaloriesTotalFood>
        {`${caloriesTotalFood}cal`}
      </CaloriesTotalFood>
    </Container>
  )
} 