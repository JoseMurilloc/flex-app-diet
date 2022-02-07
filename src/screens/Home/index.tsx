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
// import { meals } from '../../constants/meals';

import { CardOptionsMeal } from '../../components/CardOptionsMeal';
import { FlatList } from 'react-native';
import { WarnMessageScreen } from '../../components/WarnMessageScreen';
import { Meal } from './types';
import { api } from '../../services/api';
import { iconsMeals } from '../../constants/meals';

export function Home () {
  const [openMenuMeal, setOpenMenuMeal] = useState(false);
  const [meals, setMeals] = useState<Meal[]>([]);
  

  useEffect(() => {
    api.get('/meals')
      .then(response => response.data)
      .then(data => data.filter((meal: Meal) => meal.foods.length > 0))
      .then(data => data.map((meal: Meal) => ({
        ...meal,
        Icon: iconsMeals.filter(icons => icons[meal.id])[0][meal.id]
      })))
      .then(data => setMeals(data))
      .catch(error => console.log(error))
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
          <IconAvatar width={24} height={24} />
          <WelcomeMessage>Olá, Geissy 👏</WelcomeMessage>
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
        {openMenuMeal && <CardOptionsMeal setOpenMenuMeal={setOpenMenuMeal} />}
      </MenuMeal>
    </WrapperScreen>
  );
}
