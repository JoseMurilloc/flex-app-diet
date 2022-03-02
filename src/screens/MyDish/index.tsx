
import React, { useEffect, useMemo, useState } from "react";
import { Alert, FlatList } from "react-native";

import { Button } from "../../components/Button";
import { CalorieTotal } from "../../components/CalorieTotal";
import { CardFood } from "../../components/CardFood";
import { WarnMessageScreen } from "../../components/WarnMessageScreen";
import {Header as AppHeader} from '../../components/Header'

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
import { getTotalCaloriesInMacros } from "../../commons/getTotalCaloriesInMacros";
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "../../contexts/toast";


interface FoodFormatted extends Food {
  totalCaloriesConsumePortion: string;
}

export function MyDish() {

  const {data: {dish}, handleSubmitMeal} = useMeal();
  const {showToast} = useToast();

  const navigation = useNavigation();

  const existFoodInDish = useMemo(
    () => dish.length < 1,
    [dish]
  );
  const [foodFormatted, setFoodFormatted] = useState<FoodFormatted[]>([])
  const [active, setActive] = useState(true)

  const caloriesTotal = useMemo(() => {
    let total = 
      foodFormatted.reduce((accumulate: number, food: FoodFormatted) => {
        return accumulate + Number(food.totalCaloriesConsumePortion);
      }, 0)
    
    return Number(total).toFixed(2)
  }, [foodFormatted])

  const handleCaloriesTotal = (food: Food) => {
    const {protein, fat, carbs, numberServing} = 
      food.infoNutritional;

    const getTotalCalories = 
      getTotalCaloriesInMacros({protein, fat, cabos: carbs})
    
    return (
      (Number(getTotalCalories) * food.amount) / numberServing
    ).toFixed(2)
  }

  useEffect(() => {
    const parserFood = dish.map(food => {
      return {
        ...food,
        totalCaloriesConsumePortion: handleCaloriesTotal(food)
      }
    })

    setFoodFormatted(parserFood)
  } , [dish])

  
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

          {existFoodInDish ? (
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
        {!existFoodInDish && (
          <>
            <CalorieTotal caloriesTotal={caloriesTotal} />
            <WrapperButton>
              <Button 
                active={active}
                buttonText="Adicionar refeição"
                onPress={() =>  {
                  handleSubmitMeal(caloriesTotal)                    
                }}
              />
            </WrapperButton>
          </>
        )}
      </Container> 
    </>
  )
}