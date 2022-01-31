import React, { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import Modal from "react-native-modal";
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
  ContainerButton,
  ButtonCancel,
  ButtonCancelText
} from './styles';

type InfoFoodModalProps = {
  state: {
    isVisible: boolean;
    setModalInfoFood: SetModalInfoFoodProps;
  }
  food: Food;
} 

export function InfoFoodModal({ state, food }: InfoFoodModalProps) {

  const {control, handleSubmit} = useForm<any>();

  const caloriesTotalFood = useMemo(
    () => {
      const {carbs, protein, fat} = food.infoNutritional
      return carbs + protein + fat
    },
    [food.infoNutritional]
  )
  

  const handleSearchFoods = useCallback(()=> {
    console.log('handleSearchFoods')
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
              <WrapperAmountMetric>
                <GenericWrapperInput style={{width: 144, marginRight: 16}}>
                  <Input
                    title="Quantidade"
                    name="amount"
                    control={control}
                    placeholder="Digite aqui"
                    keyboardType="numeric"
                    autoCorrect={false}
                  />
                </GenericWrapperInput>

                <GenericWrapperInput style={{width: 144}}>
                  <PickerMetric
                    title="Métrica"
                    name="metric"
                    control={control}
                  />
                </GenericWrapperInput>
              </WrapperAmountMetric>

              <ContainerMacro>
                <CardMacro 
                  name="Protein"
                  value={food.infoNutritional.protein}
                />
                <CardMacro  
                  name="Carbo"
                  value={food.infoNutritional.carbs}
                />
                <CardMacro  
                  name="Fat" 
                  value={food.infoNutritional.fat}
                />
              </ContainerMacro>

              <ContainerCalorieTotal>
                <CalorieTotal caloriesTotal={caloriesTotalFood} />
              </ContainerCalorieTotal>

              <ContainerButton>
                <ButtonCancel>
                  <ButtonCancelText>
                    Cancelar
                  </ButtonCancelText>
                </ButtonCancel>
                <Button buttonText="Adicionar" />
              </ContainerButton>
            </Form>
        </ContainerModal>
      </Modal>
    </View>
  )
}