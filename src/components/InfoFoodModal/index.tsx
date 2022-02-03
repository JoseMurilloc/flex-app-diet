import React, { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Modal from "react-native-modal";
import { useMeal } from '../../contexts/meals';
import { Food, SetModalInfoFoodProps } from '../../screens/MountDish/types';
import { Button } from '../Button';
import { CalorieTotal } from '../CalorieTotal';
import { CardMacro } from '../Modal/CardMacro';
import { Input } from '../Modal/Input';
import { PickerMetric } from '../Modal/Picker';
import { 
  ContainerModal,
  Header,
  TitleHeader,
  Form,
  GenericWrapperInput,
  WrapperAmountMetric,
  ContainerMacro,
  ContainerCalorieTotal,
  ContentForm
} from './styles';
import { FormData, InfoFoodModalProps } from './types';
import { Footer } from '../Modal/Footer';


export function InfoFoodModal({ state, food }: InfoFoodModalProps) {

  const {control, handleSubmit, setValue} = useForm<any>();
  // const [amount, setAmount] = useState(0);
  // const {addFood} = useMeal();

  const caloriesTotalFood = useMemo(
    () => {
      const {carbs, protein, fat} = food.infoNutritional
      return carbs + protein + fat
    },
    [food.infoNutritional]
  )

  // 🔺 Implement logic of OnChangeText Input amount 🔺
  // const handleCaloriesTotalFoodConsume = useCallback(
  //   () => {
  //     return (caloriesTotalFood * amount) / food.gram;
  //   },
  //   [amount]
  // )

  const handleConfirmMeal = useCallback(async (data: FormData) => {
    console.log(data);
    // console.log(food);
    // try {
    //   addFood(food)
    //   const dataKey = "@dietFlex:logFoods";
    //   await AsyncStorage.setItem(dataKey, JSON.stringify(food))

    //   state.setModalInfoFood(false);
    // } catch {
    //   console.log(`🔺Error`)
    // }
  }, [])

  return (
    <View>
      <Modal 
        onBackdropPress={() => state.setModalInfoFood(false)}
        isVisible={state.isVisible}
      >
        <ContainerModal>
            <Header>
              <TitleHeader>{food.nameFood}</TitleHeader>
            </Header>
            <Form>
              <ContentForm>
                <WrapperAmountMetric>
                <GenericWrapperInput style={{width: 144}}>
                  <PickerMetric
                    title="Métrica"
                    name="metric"
                    control={control}
                    enabled={false}
                    setValue={setValue}
                  />
                </GenericWrapperInput>

                <GenericWrapperInput style={{width: 144, marginRight: 16}}>
                    <Input
                      title="Porção"
                      name="amount"
                      control={control}
                      placeholder="Digite aqui"
                      keyboardType="numeric"
                      autoCorrect={false}
                    />
                  </GenericWrapperInput>

                </WrapperAmountMetric>

                <ContainerMacro>
                  <CardMacro 
                    name="Protein"
                    type="protein"
                    value={food.infoNutritional.protein}
                  />
                  <CardMacro  
                    name="Carbo"
                    type="cabos"
                    value={food.infoNutritional.carbs}
                  />
                  <CardMacro  
                    name="Fat"
                    type="fat" 
                    value={food.infoNutritional.fat}
                  />
                </ContainerMacro>

                <ContainerCalorieTotal>
                  <CalorieTotal caloriesTotal={caloriesTotalFood} />
                </ContainerCalorieTotal>
              </ContentForm>

              <Footer 
                handleSubmit={handleSubmit} 
                handleConfirmMeal={handleConfirmMeal} 
              />
            </Form>
        </ContainerModal>
      </Modal>
    </View>
  )
}