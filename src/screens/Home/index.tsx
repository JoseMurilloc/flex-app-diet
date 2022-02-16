import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Header,
  TitleToday,
  WelcomeMessage,
  Wrapper,
  ButtonAddMeal,
  WrapperCardsMeal,
  WrapperScreen,
  MenuMeal
} from './styles';
import IconAvatar from '../../assets/avatar.svg';
import WeekList from '../../components/WeekList';
import { GraphicMetricCalories } from '../../components/GraphicMetricCalories';
import { Macro } from '../../components/GraphicMetricCalories/types';

import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import { CardMeal } from '../../components/CardMeal';

import { CardOptionsMeal } from '../../components/CardOptionsMeal';
import { FlatList, Image } from 'react-native';
import { WarnMessageScreen } from '../../components/WarnMessageScreen';
import { Meal } from './types';
import { fetchingMealOnlyFood } from '../../commons/fetchingMealOnlyFood';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export function Home () {
  const [openMenuMeal, setOpenMenuMeal] = useState(false);
  const [meals, setMeals] = useState<Meal[]>([]);
  

  async function handleLoadAllMeal() {
    const mealsFetching = await fetchingMealOnlyFood()
    setMeals(mealsFetching)
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
            <Image 
              source={require("../../assets/profile.jpeg")}
              width={24}
              height={24}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
            />
          </TouchableWithoutFeedback>
          <WelcomeMessage>Olá, Murillo 👏</WelcomeMessage>
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
              keyExtractor={meal => meal.nameMeal}
              renderItem={({item: meal}) => (
                <CardMeal
                  key={meal.nameMeal} 
                  nameMeal={meal.nameMeal}
                  caloriesTotal={meal.caloriesTotal}
                  Icon={meal.Icon}
                />
              )}
            />
          </WrapperCardsMeal>
        )}
        
      </Container>

      <MenuMeal>
        <ButtonAddMeal
          onPress={() => handleMenuOptionsIsOpen()}
          style={!openMenuMeal && { marginBottom: 100 }}
        >
          {openMenuMeal ? (
            <AntDesign 
              name="down"
              size={24}
              color="#FFF" 
            />
          ) : (
            <Entypo 
              name="plus"
              size={24} 
              color="#FFFFFF" 
              onPress={handleOpenMenu}
            />
          )}
        </ButtonAddMeal>
        {openMenuMeal 
          && <CardOptionsMeal setOpenMenuMeal={setOpenMenuMeal} />}
      </MenuMeal>
    </WrapperScreen>
  );
}
