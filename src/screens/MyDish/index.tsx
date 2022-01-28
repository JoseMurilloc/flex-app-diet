import { useMemo } from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";
import { CardFood } from "../../components/CardFood";
import { WarnMessageScreen } from "../../components/WarnMessageScreen";
import { useMeal } from "../../contexts/meals";
import { Food } from "../MountDish/types";
import { 
  Container,
  DescriptionHeader,
  Header,
  TitleHeader,
  Footer,
  CalorieTotalText,
  Line,
  CalorieTotal,
  Main,
  WrapperButton
} from "./styles";



export function MyDish() {

  const {data: {foods}} = useMeal();

  const caloriesTotal = useMemo(() => {
    return foods.reduce((accumulate: number, food: Food) => {
      return accumulate + food.caloriesTotalFood;
    }, 0)
  }, [foods])
  
  return (
    <Container>
      <Header>
        <TitleHeader>Minha lista de alimentos</TitleHeader>
        <DescriptionHeader>
          Visualização dos alimentos que estão no prato da refeição.
        </DescriptionHeader>
      </Header>

      <Main>

        <WarnMessageScreen 
          messageMain="Sem alimentos adicionadas"
          messageDescription="Comece a adicionar alimentos para podemos compor seu prato"
        />
        
        {foods.length > 0 && (
          <FlatList 
            data={foods}
            showsVerticalScrollIndicator={false}
            keyExtractor={food => food.nameFood}
            renderItem={({item: food}) => (
              <CardFood 
                nameFood={food.nameFood}
                gram={food.gram} 
                caloriesTotalFood={food.caloriesTotalFood}
              />
            )}
          />
        )}
      </Main>
      <Footer>
        <CalorieTotalText>Calorias total</CalorieTotalText>
        <Line />
        <CalorieTotal>{`${caloriesTotal} cal`}</CalorieTotal>
      </Footer>
      <WrapperButton>
        <Button buttonText="Adicionar refeição"/>
      </WrapperButton>
    </Container>
  )
}