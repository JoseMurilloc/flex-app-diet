
import React, { useEffect, useMemo } from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";
import { CalorieTotal } from "../../components/CalorieTotal";
import { CardFood } from "../../components/CardFood";
import { WarnMessageScreen } from "../../components/WarnMessageScreen";
import { useMeal } from "../../contexts/meals";
import { Food } from "../../contexts/meals/types";
import { 
  Container,
  DescriptionHeader,
  Header,
  TitleHeader,
  Main,
  WrapperButton,
  ContainerMessageWrapper
} from "./styles";
import {Header as AppHeader} from '../../components/Header'
import { useState } from "react";


interface FoodFormatted extends Food {
  totalCaloriesConsumePortion: string;
}

export function MyDish() {

  const {data: {foods}} = useMeal();
  const IS_FOODS = useMemo(() => foods.length < 1, [foods]);
  const [foodFormatted, setFoodFormatted] = useState<FoodFormatted[]>([])

  const caloriesTotal = useMemo(() => {
    let total = foodFormatted.reduce((accumulate: number, food: FoodFormatted) => {
      return accumulate + Number(food.totalCaloriesConsumePortion);
    }, 0)
    
    return Number(total).toFixed(2)
  }, [foods])

  const handleCaloriesTotal = (food: Food) => {
    const {protein, fat, carbs, numberServing} = food.infoNutritional;
    return (
      (((protein * 4) + (fat * 9) + (carbs * 4)) * food.amount) 
      / (numberServing)).toFixed(2)
  }

  useEffect(() => {
    const parserFood = foods.map(food => {
      return {
        ...food,
        totalCaloriesConsumePortion: handleCaloriesTotal(food)
      }
    })

    console.log(parserFood)

    setFoodFormatted(parserFood)
  } , [])
  
  return (
    <>
      <AppHeader titleHeader="Meu prato" />
      <Container>
        <Header>
          <TitleHeader>Minha lista de alimentos</TitleHeader>
          <DescriptionHeader>
            Visualização dos alimentos que estão no prato da refeição.
          </DescriptionHeader>
        </Header>

        <Main>

          {IS_FOODS ? (
            <ContainerMessageWrapper>
              <WarnMessageScreen 
                messageMain="Sem alimentos adicionadas"
                messageDescription="Comece a adicionar alimentos para podemos compor seu prato"
              />
            </ContainerMessageWrapper>
          ) : (
            <FlatList 
              data={foodFormatted}
              showsVerticalScrollIndicator={false}
              keyExtractor={food => food.nameFood}
              renderItem={({item: food}) => (
                <CardFood 
                  nameFood={food.nameFood}
                  numberServing={food.amount} 
                  caloriesTotalFood={food.totalCaloriesConsumePortion}
                />
              )
            }
            />
          )} 
        </Main>
        {!IS_FOODS && (
          <>
            <CalorieTotal caloriesTotal={caloriesTotal} />
            <WrapperButton>
              <Button buttonText="Adicionar refeição"/>
            </WrapperButton>
          </>
        )}
      </Container>
    </>
  )
}