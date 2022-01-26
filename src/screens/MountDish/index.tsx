import React, { useState, useEffect } from "react";
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
// import { foods } from "../../commons/foods";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { Food } from "./types";
import { api } from "../../services/api";
import theme from "../../global/styles/theme";

export function MountDish() {

  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadFoods() {
    try {
      setLoading(true);
      const response = await api.get('/foods');
      setFoods(response.data);     
    } catch {
      console.log(`⭕ Tratar o error com alguma mensagem para o usuário final`)
    } finally {
      setLoading(false)
    }
      
  }

  useEffect(() => {
    loadFoods()
  }, [])

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
          {loading ? (
            <ActivityIndicator 
              color={theme.colors.primary} 
              size="large" 
              style={{ flex: 1, justifyContent: "flex-start"}} 
            />
          ): (
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
          )}
        </WrapperCardFood>


      </ContentFoods>
    </Container>
  )
}