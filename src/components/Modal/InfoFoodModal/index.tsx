import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';
import Modal from "react-native-modal";
import { useMeal } from '../../../contexts/meals';

import { CalorieTotal } from '../../CalorieTotal';
import { CardMacro } from '../../Modal/CardMacro';
import { Input } from '../../Form/Input';
import { PickerMetric } from '../../Modal/Picker';
import { 
  ContainerModal,
  Header,
  TitleHeader,
  Form,
  GenericWrapperInput,
  WrapperAmountMetric,
  ContainerMacro,
  ContainerCalorieTotal,
  ContentForm,
  Footer,
  FooterButtons,
  FooterButtonCancel,
  FooterButtonCancelText
} from './styles';
import { InfoFoodModalProps } from './types';
import { useToast } from '../../../contexts/toast';
import { ErrorMessage } from '../../ErrorMessage';
import { Button } from '../../Button';


export function InfoFoodModal({ state, food }: InfoFoodModalProps) {

  const {control, handleSubmit, setValue, formState: { errors }} = useForm<any>();
  const [amount, setAmount] = useState('');

  const {addFoodInDish, data: {dish}} = useMeal();
  const {showToast} = useToast();

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
      
      const existInDish = dish.find(foodInDish => foodInDish.nameFood === food.nameFood)

      if (existInDish) {
        Alert.alert(`${food.nameFood} Já esta no seu prato 😬`)
        return;
      }


      await addFoodInDish({...food, amount: Number(amount)})
      state.setModalInfoFood(false);
      showToast('success', `${food.nameFood} já está no prato`)

    } catch {
      showToast('error', 'Alimento não inserido, por favor tente novamente')
    }
  }, [food, amount, dish])

  useEffect(() => {
    if (state.isVisible) setAmount(String(food.infoNutritional.numberServing))
  }, [state.isVisible])

  const isErrorContainAmount = useMemo(() => !amount.length, [amount])

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
                      name="servingSize"
                      control={control}
                      enabled={false}
                      food={food}
                      onValueChange={((itemValue: any, itemIndex: number) => {
                        setValue("servingSize", itemValue)
                      })}
                    />
                  </GenericWrapperInput>

                  <GenericWrapperInput style={{width: 144}}>
                    <Input
                      errors={isErrorContainAmount ? isErrorContainAmount : errors.numberServing}
                      control={control}
                      name="numberServing"
                      autoFocus
                      value={amount}
                      title="Porção"
                      onChangeText={(value: any) => setAmount(value)}
                      placeholder="ex: 150"
                      keyboardType="numeric"
                      autoCorrect={false}
                      onSubmitEditing={handleSubmit(handleAddFoodInMeal)}
                    />
                    {isErrorContainAmount && 
                      <ErrorMessage text="Campo Obrigatório"/> 
                    }
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

              <Footer>
                <FooterButtons>
                  <FooterButtonCancel 
                    onPress={() => state.setModalInfoFood(false)}
                  >
                    <FooterButtonCancelText>
                      Cancelar
                    </FooterButtonCancelText>
                  </FooterButtonCancel>
                  <Button
                    onPress={handleSubmit(handleAddFoodInMeal)}
                    buttonText="Cadastrar" 
                  />
                </FooterButtons>
              </Footer>
            </Form>
        </ContainerModal>
      </Modal>
    </View>
  )
}