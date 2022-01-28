import { 
  Container,
  Content,
  NameFood,
  CalorieTotalFood, 
  CaloriesTotalFood,
  WrapperContent
} from "./styles";


type CardMealProps = {
  nameFood: string;
  gram: number;
  caloriesTotalFood: number;
}

export function CardFood({ nameFood, gram, caloriesTotalFood }: CardMealProps) {
  return (
    <Container>
      <WrapperContent>
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