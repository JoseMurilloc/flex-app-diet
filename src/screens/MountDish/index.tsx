import React, { useEffect, useCallback, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { 
  Container,
  ContentFoods,
  Line,
  WrapperCardFood,
  Title,
  TitleJoinLine,
  WrapperInput,
  TitleNotFound,
  DescriptionNotFound,
  WrapperMessageNotFound,
  WrapperButtons,
  ButtonFunctionality,
  WrapperMenu
} from "./styles";
import { Input } from "../../components/Form/Input";
import { CardFood } from "../../components/CardFood";
import { ActivityIndicator, FlatList } from "react-native";
import { Food, MountDishProps, ParamsRouter } from "./types";
import { api } from "../../services/api";
import theme from "../../global/styles/theme";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useMeal } from "../../contexts/meals";

export function MountDish() {

  const {addKeyMeal, data} = useMeal();

  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(false);
  const [foodsNotFound, setFoodsNotFound] = useState(false);

  const route = useRoute()
  const navigation = useNavigation<MountDishProps>()
  const { idMeal } =  route.params as ParamsRouter


  useEffect(() => {
    try {
      addKeyMeal(idMeal);
    } catch {
      console.log(`⭕ Failed to add`);
    }
  }, [])

  const loadFoods = useCallback(async() => {
    try {
      setLoading(true);
      const response = await api.get('/foods?_limit=3');
      setFoods(response.data);     
    } catch {
      setFoodsNotFound(true)
      console.log(`⭕ Tratar o error com alguma mensagem para o usuário final`)
    } finally {
      setLoading(false)
    }    
  }, [])

  useEffect(() => {
    loadFoods()
  }, [])

  return (
    <Container>
      <StatusBar style="light" />
      <WrapperInput>
        <Input placeholder="Pesquisar por alimento..." />
      </WrapperInput>


      <WrapperMenu>
        <WrapperButtons>
          <ButtonFunctionality type="barCode">
            <Ionicons name="ios-barcode-outline" size={24} color="#444" />
          </ButtonFunctionality>

          <ButtonFunctionality type="plus">
            <Entypo name="plus" size={24} color="#444" />
          </ButtonFunctionality>

          <ButtonFunctionality 
            onPress={() => navigation.navigate('MyDish')}
            type="dish"
          >
            <MaterialIcons name="menu-book" size={24} color="#444" />
          </ButtonFunctionality>
        </WrapperButtons>
      </WrapperMenu>

      <ContentFoods>
        <TitleJoinLine>
          <Title>Meu histórico</Title>
          <Line />
        </TitleJoinLine>

        {foodsNotFound && (
          <WrapperMessageNotFound>
            <TitleNotFound>
              Alimento não encontrado
            </TitleNotFound>
            <DescriptionNotFound>
              Esse alimento não foi cadastrado, por favor inicie o processo de cadastramento clicando no botão a cima.
            </DescriptionNotFound>
          </WrapperMessageNotFound>
        )}

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