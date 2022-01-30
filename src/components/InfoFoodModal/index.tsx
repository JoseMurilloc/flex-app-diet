import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import Modal from "react-native-modal";
import { Food, SetModalInfoFoodProps } from '../../screens/MountDish/types';
import { Input } from '../Modal/Input';
import { PickerMetric } from '../Modal/Picker';
import { 
  ContainerModal,
  Header,
  TitleHeader,
  Form,
  GenericWrapperInput,
  WrapperAmountMetric
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

  const handleSearchFoods = useCallback(()=> {
    
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
                <GenericWrapperInput 
                  style={{width: 144, height: 24, marginRight: 16}}
                >
                  <Input
                    title="Quantidade"
                    name="amount"
                    control={control}
                    placeholder="Digite aqui"
                    keyboardType="numeric"
                    autoCorrect={false}
                  />
                </GenericWrapperInput>

                <GenericWrapperInput style={{width: 108, height: 24}}>
                  <PickerMetric
                    title="Métrica"
                    name="metric"
                    control={control}
                  />
                </GenericWrapperInput>
              </WrapperAmountMetric>
            </Form>
        </ContainerModal>
      </Modal>
    </View>
  )
}