import React, { useState } from 'react';
import {
  Container,
  Header,
  TitleToday,
  WelcomeMessage,
  Wrapper,
  MessageNotMealFound,
  DescriptionNotMealFound,
  ButtonAddMeal,
  ScrollCardMeal,
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

export function Home () {

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
        {mealsStatus ? (
          <Wrapper marginTop={0} marginBottom={0} isCenter={true}>
            <MessageNotMealFound>
              Sem refeições adicionadas
            </MessageNotMealFound>
            <DescriptionNotMealFound>
              Comece a adicionar refeições clicando no botão 
              {`\n`}
              a baixo
          </DescriptionNotMealFound>
          </Wrapper>
        ) : (
          <ScrollCardMeal>
          {meals.map(meal => (
            <CardMeal
              key={meal.nameMeal} 
              nameMeal={meal.nameMeal}
              caloriesTotal={350}
              Icon={meal.Icon}
            />
          ))}
        </ScrollCardMeal>
        )}
        
      </Container>

      <MenuMeal>
        <ButtonAddMeal
          onPress={() => setOpenMenuMeal(state => !state)}
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
        {openMenuMeal && <CardOptionsMeal />}
      </MenuMeal>
    </WrapperScreen>
  );
}
