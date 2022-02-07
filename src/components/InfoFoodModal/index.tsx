import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Modal from "react-native-modal";
import { useMeal } from '../../contexts/meals';

import { CalorieTotal } from '../CalorieTotal';
import { CardMacro } from '../Modal/CardMacro';
import { Input } from '../Input';
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
import { FormInfoFoodData, InfoFoodModalProps } from './types';
import { Footer } from '../Modal/Footer';


export function InfoFoodModal({ state, food }: InfoFoodModalProps) {

  const {control, handleSubmit, setValue} = useForm<any>();
  const [amount, setAmount] = useState(String(food.infoNutritional.numberServing));
  const {addFood} = useMeal();

  const caloriesTotalFood = useMemo(
    () => {
      const {protein, fat, carbs, numberServing} = food.infoNutritional
      if (amount) {
        return (
          (((protein * 4) + (fat * 9) + (carbs * 4)) * Number(amount)) 
          / (numberServing)
        ).toFixed(2)
      }
      return  ((protein + fat + carbs) * 0) / (numberServing)
    },
    [amount]
  )

  const handleAddFoodInMeal = useCallback(async (data: any) => {
    if (!amount) {
      Alert.alert(`😅 Coloque a porção que irá comer`)
      return;
    }

    try {
      await addFood({...food, amount: Number(amount)})
      state.setModalInfoFood(false);
    } catch {
      console.log(`🔺Error`)
    }
  }, [food, amount])

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
                  <GenericWrapperInput style={{width: 144,  marginRight: 16}}>
                    <PickerMetric
                      title="Métrica"
                      name="metric"
                      control={control}
                      enabled={false}
                      food={food}
                      onValueChange={((itemValue: any, itemIndex: number) => {
                        setValue("metric", itemValue)
                      })}
                    />
                  </GenericWrapperInput>

                  <GenericWrapperInput style={{width: 144}}>
                    <Input
                      autoFocus
                      value={amount}
                      title="Porção"
                      onChangeText={value => setAmount(value)}
                      placeholder="Digite a Porção aqui..."
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
                handleAddFoodInMeal={handleAddFoodInMeal}
                setModalInfoFood={state.setModalInfoFood}
              />
            </Form>
        </ContainerModal>
      </Modal>
    </View>
  )
}