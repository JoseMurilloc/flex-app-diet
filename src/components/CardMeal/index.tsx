import React from "react";
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
} from "./styles";

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { SvgProps } from "react-native-svg";
import theme from "../../global/styles/theme";
import { FlatList } from "react-native";

type CardMealProps = {
  nameMeal: string;
  caloriesTotal: number;
  Icon?: React.FC<SvgProps>;
}

export function CardMeal({ nameMeal, caloriesTotal, Icon }: CardMealProps) {
  return (
    <Container>
      <Header style={{borderBottomWidth: 0.5}}>
        <TitleHeader>{nameMeal}</TitleHeader>
        <MaterialIcons name="more-vert" size={24} color={theme.colors.text} />
      </Header>

      <Main>
        <FlatList 
          data={[
            "Café marata, 20ml", "Leite desnatado, 15g", "Queijo mussarela, 50g"
          ]}
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