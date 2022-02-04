import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Modal from "react-native-modal";
import { useMeal } from '../../contexts/meals';
import { Food, SetModalInfoFoodProps } from '../../screens/MountDish/types';

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
import { FormInfoFoodData, InfoFoodModalProps } from './types';
import { Footer } from '../Modal/Footer';
import { getTotalCaloriesInMacros } from '../../commons/getTotalCaloriesInMacros';


export function InfoFoodModal({ state, food }: InfoFoodModalProps) {

  const {control, handleSubmit, setValue, reset} = useForm<any>();
  // const [amount, setAmount] = useState(0);
  const {addFood} = useMeal();

  const caloriesTotalFood = useMemo(
    () => {
      const {carbs, protein, fat} = food.infoNutritional
      return getTotalCaloriesInMacros({cabos: carbs, protein, fat})
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


  const handleAddFoodInMeal = useCallback(async (data: FormInfoFoodData) => {
    if (!data.numberServing) {
      Alert.alert(`😅 Coloque a porção que irá comer`)
      return;
    }

    try {
      await addFood(food)
      state.setModalInfoFood(false);
      reset();
    } catch {
      console.log(`🔺Error`)
    }
  }, [food])

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
                    title="Porção"
                    name="numberServing"
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
                handleAddFoodInMeal={handleAddFoodInMeal}
                setModalInfoFood={state.setModalInfoFood}
              />
            </Form>
        </ContainerModal>
      </Modal>
    </View>
  )
}