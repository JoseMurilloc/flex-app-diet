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
import { Meal } from './types';
import { fetchingMealOnlyFood } from '../../commons/fetchingMealOnlyFood';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ButtonAddMeal } from '../../components/ButtonAddMeal';
import { SimpleLineIcons } from '@expo/vector-icons';

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

  // Added where i am using `false` when implementation meal in firebase 
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
        {false ? (
          <Wrapper marginTop={0} marginBottom={0} isCenter={true}>
            <WarnMessageScreen 
              messageMain="Sem refeições adicionadas"
              messageDescription="Comece a adicionar refeições clicando no botão a baixo"
            />
          </Wrapper>
        ) : (
          <WrapperCardsMeal>
            <FlatList 
              data={[0,1,3]}
              showsVerticalScrollIndicator={false}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => String(item)}
              renderItem={({item: meal}) => (
                <CardMeal
                  key={meal} 
                  nameMeal="Café da manha"
                  caloriesTotal={200.52}
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
