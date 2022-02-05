
import React, { useMemo } from "react";
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
import {StatusBar} from 'expo-status-bar';
import theme from "../../global/styles/theme";
import {Header as AppHeader} from '../../components/Header'


export function MyDish() {

  const {data: {foods}} = useMeal();

  const caloriesTotal = useMemo(() => {
    let total = foods.reduce((accumulate: number, food: Food) => {
      return accumulate + Number(food.caloriesTotalFood);
    }, 0)
    
    return Number(total).toFixed(2)
  }, [foods])
  
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
    </>
  )
}