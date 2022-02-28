import React, { useState } from "react";
import { 
  Container,
  Footer,
  Header,
  TitleHeader,
  CaloriesFire,
  CaloriesFireValue,
  TimeMeal,
  TimeMealValue,
  Main,
  FoodText,
  Menu,
  ButtonMenu,
  ButtonMenuOption,
} from "./styles";

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import theme from "../../global/styles/theme";
import { Alert, FlatList, TouchableOpacity } from "react-native";
import { Food } from "../../contexts/meals/types";
import firestore from '@react-native-firebase/firestore';
import { useToast } from "../../contexts/toast";


type CardMealProps = {
  id: string;
  nameMeal: string;
  caloriesTotal: number;
  foods: Array<Food>
  hourConsumed: string;
  updatedMeals: (id: string) => void;
}

export function CardMeal({ 
  id, 
  foods, 
  hourConsumed, 
  nameMeal, 
  caloriesTotal,
  updatedMeals 
}: CardMealProps) {

  const { showToast } = useToast()

  const [menuOpen, setMenuOpen] = useState(false)

  const foodsMealsParser = foods?.map(data => {
    const { nameFood, amount, infoNutritional } = data;
    return `${nameFood}, ${amount}${infoNutritional.servingSize}`;
  }) 

  function handleShowMenu() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  const alertDeleteMeal = () => Alert.alert(
    'Descartar refeição',
    'Caso confirme a refeição será removida',
    [
      {
        text: 'Não', 
        style: 'cancel', 
        onPress: () => setMenuOpen(false)
      },
      {
        text: 'Sim',
        style: 'destructive',
        onPress: () => {
          handleDeleteMeal();
          updatedMeals(id)
        },
      },
    ],
  )

  function handleDeleteMeal() {
    firestore()
      .collection("meals")
      .doc(id)
      .delete()
      .then(() => {
        showToast('success', 'Cartão da refeição removido com sucesso')
      })
      .catch(() => {
        showToast('error', 'Error no servidor, tente novamente 😅')
      })
  }

  return (
    <Container onPress={handleShowMenu}>
      {menuOpen && (
        <Menu>
          <ButtonMenu>
            <ButtonMenuOption>Editar</ButtonMenuOption>  
          </ButtonMenu>
          <ButtonMenu onPress={alertDeleteMeal}>
            <ButtonMenuOption>Excluir</ButtonMenuOption>  
          </ButtonMenu>
        </Menu>
      )}


      <Header style={{borderBottomWidth: 0.5}}>
        <TitleHeader>{nameMeal}</TitleHeader>
        <TouchableOpacity 
          onPress={() => setMenuOpen(true)}
          style={{ width: 50, height: '100%', justifyContent: 'center', alignItems: 'center'}}
        >
          <MaterialIcons 
            name="more-vert" 
            size={24} 
            color={theme.colors.text} 
          />
        </TouchableOpacity>
      </Header>

      <Main>
        <FlatList 
          data={foodsMealsParser}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <FoodText>{item}</FoodText>
          )}
        />
      </Main>

      <Footer>
        <CaloriesFire>
          <MaterialCommunityIcons name="fire" size={24} color="#d24b4b" />
          <CaloriesFireValue>{`${caloriesTotal}cal`}</CaloriesFireValue>
        </CaloriesFire>

        <TimeMeal>
          <Ionicons 
            name="md-time-outline" 
            size={24} 
            color={theme.colors.primary} 
          />
          <TimeMealValue>7:00</TimeMealValue>
        </TimeMeal>
      </Footer>
    </Container>
  )
} 