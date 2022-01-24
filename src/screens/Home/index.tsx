import React from 'react';
import {
  Container,
  Header,
  TitleToday,
  WelcomeMessage,
  Wrapper,
  MessageNotMealFound,
  DescriptionNotMealFound,
  ButtonAddMeal
} from './styles';
import IconAvatar from '../../assets/avatar.svg';
import WeekList from '../../components/WeekList';
import { GraphicMetricCalories } from '../../components/GraphicMetricCalories';
import { Macro } from '../../components/GraphicMetricCalories/types';
import { Entypo } from '@expo/vector-icons'; 

export function Home () {
  
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
      <Wrapper marginTop={35} marginBottom={0} isCenter={true}>
        <MessageNotMealFound>
          Sem refeições adicionadas
        </MessageNotMealFound>
        <DescriptionNotMealFound>
          Comece a adicionar refeições clicando no botão 
          {`\n`}
          a baixo
        </DescriptionNotMealFound>
      </Wrapper>

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
