import React, { useEffect, useState } from "react";
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
import { InputSearch } from "../../components/Form/InputSearch";
import { CardFood } from "../../components/CardFood";
import { Header } from '../../components/Header';

import { ActivityIndicator, Alert, FlatList } from "react-native";
import { Food, FormData, ParamsRouter } from "./types";
import { api } from "../../services/api";
import theme from "../../global/styles/theme";
import { useNavigation, useRoute } from "@react-navigation/native";


import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Dish from '../../assets/dish.svg';

import { useMeal } from "../../contexts/meals";
import { useForm } from "react-hook-form";
import { WarnMessageScreen } from "../../components/WarnMessageScreen";
import { InfoFoodModal } from "../../components/Modal/InfoFoodModal";
import { RegisterFoodModal } from "../../components/Modal/RegisterFoodModal";
import { getTotalCaloriesInMacros } from "../../commons/getTotalCaloriesInMacros";
import { useToast } from "../../contexts/toast";

import firestore from '@react-native-firebase/firestore';

export function MountDish() {

  const {control, handleSubmit} = useForm<FormData>();

  const [modalInfoFood, setModalInfoFood] = useState(false);
  const [modalRegisterFood, setModalRegisterFood] = useState(false);
  const [firstSearch, setFirstSearch] = useState(true)
  const [foodSelected, setFoodSelected] = useState<Food|null>(null)
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('Meu histórico');
 

  const {addKeyMeal} = useMeal();
  const {showToast} = useToast()

  const [foodsOfSearch, setFoodsOfSearch] = 
    useState<any[]>([]);


  const route = useRoute()
  const navigation = useNavigation()
  const { idMeal } =  route.params as ParamsRouter


  useEffect(() => {
    try {
      addKeyMeal(idMeal);
    } catch {
      showToast("error", "Problema interno")
    }
  }, [])


  async function handleSearchFoods(form: FormData) {
    const { search } = form;
    if(!search) {
      return Alert.alert('Digite um alimento para podemos procurar 😅')
    }

    setFoodsOfSearch([])
    setLoading(true);

    
    firestore()
      .collection("foods")
      .orderBy('nameFood')
      .startAt(search)
      .endAt(search+'\uf8ff')
      .get()
      .then(querySnapshot => {
        const foods = querySnapshot.docs.map(doc => doc.data())
        setFoodsOfSearch(foods)
        setTitle('Resultado da busca')
      })
      .catch(() => {
        showToast("error", `Problema interno`)
      })
      .finally(() => {
        setLoading(false);
        setFirstSearch(false);
      })
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

  function handleRegisterFood() {
    setModalRegisterFood(true);
  }

  return (
   <>
    <Header titleHeader="Montar prato" />
    <Container>
      <WrapperInput>
        <InputSearch 
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

          <ButtonFunctionality 
            onPress={() => handleRegisterFood()}
            type="plus"
          >
            <Entypo name="plus" size={24} color="#444" />
          </ButtonFunctionality>

          <ButtonFunctionality 
            // @ts-ignore
            onPress={() => navigation.navigate({ name: 'MyDish'})}
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
                  numberServing={food.infoNutritional.numberServing} 
                  caloriesTotalFood={getTotalCaloriesInMacros({
                    protein:  food.infoNutritional.protein, 
                    fat: food.infoNutritional.fat, 
                    cabos: food.infoNutritional.carbs, 
                  })}
                  onPress={() => handleOpenCardFoodInfo(food)}
                />
              )}
            />
          )}
        </WrapperCardFood>
      </ContentFoods>

      {!!foodSelected && (
        <InfoFoodModal 
          state={{
              isVisible: modalInfoFood,
              setModalInfoFood: setModalInfoFood
            }}
          food={foodSelected}
        />
      )}

      <RegisterFoodModal 
        state={{
          isVisible: modalRegisterFood,
          setModalRegisterFood: setModalRegisterFood
        }}
      />
    </Container>
   </> 
  )
}