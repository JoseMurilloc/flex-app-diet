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
  WrapperMessageNotFound,
  WrapperButtons,
  ButtonFunctionality,
  WrapperMenu
} from "./styles";
import { Input } from "../../components/Form/Input";
import { CardFood } from "../../components/CardFood";
import { ActivityIndicator, Alert, FlatList } from "react-native";
import { Food, FormData, MountDishProps, ParamsRouter } from "./types";
import { api } from "../../services/api";
import theme from "../../global/styles/theme";
import { useNavigation, useRoute } from "@react-navigation/native";


import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Dish from '../../assets/dish.svg';

import { useMeal } from "../../contexts/meals";
import { useForm } from "react-hook-form";
import { WarnMessageScreen } from "../../components/WarnMessageScreen";
import { InfoFoodModal } from "../../components/InfoFoodModal";

export function MountDish() {

  const {control, handleSubmit} = useForm<FormData>();
  const [modalInfoFood, setModalInfoFood] = useState(false);

  const {addKeyMeal} = useMeal();

  const [foodsOfSearch, setFoodsOfSearch] = 
    useState<Food[]>([]);

  const [firstSearch, setFirstSearch] = useState(true)
  const [foodSelected, setFoodSelected] = useState<Food>({} as Food)

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('Meu histórico');

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


  const loadFoodsStoreHistory = useCallback(async() => {
    return 'LocalStorage last search in App';   
  }, [])

  async function handleSearchFoods(form: FormData) {
    const { search } = form;
    if(!search) {
      return Alert.alert('Digite um alimento para podemos procurar 😅')
    }

    try {
      setFoodsOfSearch([])
      setLoading(true);

      const response = await api.get<Food[]>(`/foods?nameFood_like=${search}`);
      
      setFoodsOfSearch(response.data)
      setTitle('Resultado da busca')
    } catch {
      console.log('🚨')
    } finally {
      setLoading(false);
      setFirstSearch(false);
    }
  }

  const handleMessageWarn = () => {
    if (foodsOfSearch.length === 0) {
      return !firstSearch
    }

    return false
  }

  function handleOpenCardFoodInfo(food: Food) {
    setModalInfoFood(true)
    setFoodSelected(food)
  }

  return (
    <Container>
      <StatusBar style="light" />
      <WrapperInput>
        <Input 
          name="search"
          control={control}
          placeholder="Pesquisar por alimento..."
          onSubmitEditing={handleSubmit(handleSearchFoods)}
          autoCapitalize="sentences"
          autoCorrect={false}
        />
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
            <Dish width={24} />
          </ButtonFunctionality>
        </WrapperButtons>
      </WrapperMenu>

      <ContentFoods>
        <TitleJoinLine>
          <Title>{`${title}`}</Title>
          <Line />
        </TitleJoinLine>

        {(handleMessageWarn() && !loading) && (
          <WrapperMessageNotFound>
            <WarnMessageScreen 
              messageMain="Alimento não encontrado"
              messageDescription="Esse alimento não foi cadastrado, por favor inicie o processo de cadastramento clicando no botão a cima."
            />
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
              data={foodsOfSearch}
              keyExtractor={food => food.nameFood}
              renderItem={({item: food}) => (
                <CardFood 
                  nameFood={food.nameFood}
                  gram={food.gram} 
                  caloriesTotalFood={food.caloriesTotalFood}
                  onPress={() => handleOpenCardFoodInfo(food)}
                />
              )}
            />
          )}
        </WrapperCardFood>
      </ContentFoods>

      <InfoFoodModal 
        state={{
          isVisible: modalInfoFood,
          setModalInfoFood: setModalInfoFood
        }}
        food={foodSelected}
      />
    </Container>
  )
}