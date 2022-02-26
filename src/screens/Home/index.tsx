import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Header,
  TitleToday,
  Wrapper,
  WrapperCardsMeal,
  WrapperScreen,
  MenuMeal,
} from './styles';
import WeekList from '../../components/WeekList';
import { GraphicMetricCalories } from '../../components/GraphicMetricCalories';
import { Macro } from '../../components/GraphicMetricCalories/types';


import { CardMeal } from '../../components/CardMeal';

import { CardOptionsMeal } from '../../components/CardOptionsMeal';
import { FlatList } from 'react-native';
import { WarnMessageScreen } from '../../components/WarnMessageScreen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ButtonAddMeal } from '../../components/ButtonAddMeal';
import { SimpleLineIcons } from '@expo/vector-icons';

import firestore from '@react-native-firebase/firestore'
import { MealDTO } from '../../dtos/MealDTO';

export function Home () {
  const [openMenuMeal, setOpenMenuMeal] = useState(false);
  const [meals, setMeals] = useState<MealDTO[]>([]);
  

  async function handleLoadAllMeal() {
    firestore()
      .collection('meals')
      .get()
      .then(querySnapshot => 
        querySnapshot.docs.map(doc => doc.data() as MealDTO)
      )
      .then(meals => setMeals(meals))     
      .catch(err => console.log(err))
  }

  useEffect(() => {
    handleLoadAllMeal();
  }, [])
  
  const macros: Macro[] = [
    { name: 'Proteina', amount: 100, progress: 0.6},
    { name: 'Carboidrato', amount: 100, progress: 0.7},
    { name: 'Gordura', amount: 100, progress: 0.1},
  ]

  function handleOpenMenu() {
    setOpenMenuMeal(state => !state)
  }

  const handleMenuOptionsIsOpen = () => {
    setOpenMenuMeal(state => !state);
  }

  const isWarnNotFoods = useCallback(()=> !(meals.length > 0), [meals])

  return (
    <WrapperScreen>
      <Container>
        <Header>
          <TouchableWithoutFeedback>
            <SimpleLineIcons name="menu" size={24} color="black" />
          </TouchableWithoutFeedback>
          <Wrapper 
            marginTop={21} 
            marginBottom={11} 
            isCenter={true}
          >
            <WeekList />
          </Wrapper>
        </Header>
        <Wrapper marginTop={11} marginBottom={25}>
          <TitleToday>Hoje</TitleToday>
          <GraphicMetricCalories data={macros}/>
        </Wrapper>
        {isWarnNotFoods() ? (
          <Wrapper marginTop={0} marginBottom={0} isCenter={true}>
            <WarnMessageScreen 
              messageMain="Sem refeições adicionadas"
              messageDescription="Comece a adicionar refeições clicando no botão a baixo"
            />
          </Wrapper>
        ) : (
          <WrapperCardsMeal>
            <FlatList 
              data={meals}
              showsVerticalScrollIndicator={false}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={meal => String(meal.nameMeal)}
              renderItem={({item: meal}) => (
                <CardMeal
                  nameMeal={meal.nameMeal}
                  caloriesTotal={meal.caloriesTotal}
                />
              )}
            />
          </WrapperCardsMeal>
        )}
        
      </Container>

      <MenuMeal>
        <ButtonAddMeal
          onPress={() => handleMenuOptionsIsOpen()}
          handleOpenMenu={handleOpenMenu}
          openMenuMeal={openMenuMeal}
        />
        {openMenuMeal 
          && <CardOptionsMeal setOpenMenuMeal={setOpenMenuMeal} />}
      </MenuMeal>
    </WrapperScreen>
  );
}
