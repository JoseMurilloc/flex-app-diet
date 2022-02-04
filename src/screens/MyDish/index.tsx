
import React, { useMemo } from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";
import { CalorieTotal } from "../../components/CalorieTotal";
import { CardFood } from "../../components/CardFood";
import { WarnMessageScreen } from "../../components/WarnMessageScreen";
import { useMeal } from "../../contexts/meals";
import { 
  Container,
  DescriptionHeader,
  Header,
  TitleHeader,
  Main,
  WrapperButton,
  ContainerMessageWrapper
} from "./styles";



export function MyDish() {

  const {data: {foods}} = useMeal();

  const caloriesTotal = useMemo(() => {
    let total = foods.reduce((accumulate: number, food: any) => {
      return accumulate + food.caloriesTotalFood;
    }, 0)

    return total.toFixed(2)
  }, [foods])
  
  return (
    <Container>
      <Header>
        <TitleHeader>Minha lista de alimentos</TitleHeader>
        <DescriptionHeader>
          Visualização dos alimentos que estão no prato da refeição.
        </DescriptionHeader>
      </Header>

      <Main>

        {foods.length < 1 ? (
          <ContainerMessageWrapper>
            <WarnMessageScreen 
              messageMain="Sem alimentos adicionadas"
              messageDescription="Comece a adicionar alimentos para podemos compor seu prato"
            />
          </ContainerMessageWrapper>
        ) : (
          <FlatList 
            data={foods}
            showsVerticalScrollIndicator={false}
            keyExtractor={food => food.nameFood}
            renderItem={({item: food}) => (
              <CardFood 
                nameFood={food.nameFood}
                gram={food.gram} 
                caloriesTotalFood={food.caloriesTotalFood}
              />
            )}
          />
        )} 
      </Main>
      <CalorieTotal caloriesTotal={caloriesTotal} />
      <WrapperButton>
        <Button buttonText="Adicionar refeição"/>
      </WrapperButton>
    </Container>
  )
}