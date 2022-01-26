import React from "react";
import { StatusBar } from 'expo-status-bar';
import { 
  Container,
  ContentFoods,
  Line,
  ScrollCardFood,
  Title,
  TitleJoinLine,
  WrapperInput,
} from "./styles";
import { Input } from "../../components/Form/Input";
import { CardFood } from "../../components/CardFood";

export function MountDish() {
  return (
    <Container>
      <StatusBar style="light" />
      <WrapperInput>
        <Input placeholder="pesquisar por alimento" />
      </WrapperInput>

      <ContentFoods>
        <TitleJoinLine>
          <Title>Meu historico</Title>
          <Line />
        </TitleJoinLine>

        <ScrollCardFood>
          {[0,1,2,3,4,5,6,7,8,9,10].map(item => (
            <CardFood 
              key={item}
              nameFood="Feijão carioca" 
              gram={100} 
              caloriesTotalFood={128}
            />
          ))}
        </ScrollCardFood>


      </ContentFoods>
    </Container>
  )
}