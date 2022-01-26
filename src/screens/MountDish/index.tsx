import React from "react";
import { StatusBar } from 'expo-status-bar';
import { 
  Container,
  ContentFoods,
  Line,
  WrapperCardFood,
  Title,
  TitleJoinLine,
  WrapperInput,
} from "./styles";
import { Input } from "../../components/Form/Input";
import { CardFood } from "../../components/CardFood";
import { foods } from "../../commons/foods";
import { FlatList } from "react-native";

export function MountDish() {
  return (
    <Container>
      <StatusBar style="light" />
      <WrapperInput>
        <Input placeholder="pesquisar por alimento" />
      </WrapperInput>

      <ContentFoods>
        <TitleJoinLine>
          <Title>Meu historico</Title>
          <Line />
        </TitleJoinLine>

        <WrapperCardFood>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={foods}
            keyExtractor={food => food.nameFood}
            renderItem={({item: food}) => (
              <CardFood 
                nameFood={food.nameFood}
                gram={food.gram} 
                caloriesTotalFood={food.caloriesTotalFood}
              />
            )}
          />
        </WrapperCardFood>


      </ContentFoods>
    </Container>
  )
}