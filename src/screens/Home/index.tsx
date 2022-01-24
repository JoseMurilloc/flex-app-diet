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
  WrapperCardsMeals
} from './styles';
import IconAvatar from '../../assets/avatar.svg';
import WeekList from '../../components/WeekList';
import { GraphicMetricCalories } from '../../components/GraphicMetricCalories';
import { Macro } from '../../components/GraphicMetricCalories/types';
import { Entypo } from '@expo/vector-icons'; 
import { CardMeal } from '../../components/CardMeal';

export function Home () {

  const [mealsStatus, setMealsStatus] = useState(true);
  
  const macros: Macro[] = [
    { name: 'Proteina', amount: 100, progress: 0.5},
    { name: 'Carboidrato', amount: 100, progress: 0.5},
    { name: 'Gordura', amount: 100, progress: 0.5},
  ]

  return (
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
      {!mealsStatus && (
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
      )}
      <ScrollCardMeal>
        <WrapperCardsMeals>
          <CardMeal />
        </WrapperCardsMeals>
      </ScrollCardMeal>

      <ButtonAddMeal>
        <Entypo 
          name="plus"
          size={40} 
          color="#FFFFFF" 
        />
      </ButtonAddMeal>
    </Container>
  );
}
