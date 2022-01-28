import React, { useState } from 'react';
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
import { meals } from '../../constants/meals';

import { CardOptionsMeal } from '../../components/CardOptionsMeal';
import { FlatList } from 'react-native';
import { WarnMessageScreen } from '../../components/WarnMessageScreen';

export function Home () {

  // mealsStatus State 🚨FlatListFlatList
  const [mealsStatus, setMealsStatus] = useState(true);
  const [openMenuMeal, setOpenMenuMeal] = useState(false);
  
  
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
        {!mealsStatus ? (
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
                caloriesTotal={350}
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
        {openMenuMeal && 
          <CardOptionsMeal 
            setOpenMenuMeal={setOpenMenuMeal}
          />}
      </MenuMeal>
    </WrapperScreen>
  );
}
