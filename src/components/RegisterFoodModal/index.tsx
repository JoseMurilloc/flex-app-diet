import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Modal from "react-native-modal";
import { useMeal } from '../../contexts/meals';
import { Food, SetModalInfoFoodProps } from '../../screens/MountDish/types';
import { Input } from '../Modal/Input';
import { PickerMetric } from '../Modal/Picker';
import { 
  ContainerModal,
  Header,
  TitleHeader,
  Form,
  GenericWrapperInput,
  WrapperInputsLine,
  ContentForm,
  WrapperInputDescription,
  InputDescription,
  InfoNutritional,
  InfoNutritionalText,
  InfoNutritionalLine,
} from './styles';
import { Footer } from '../Modal/Footer';

type RegisterFoodModalProps = {
  state: {
    isVisible: boolean;
    setModalRegisterFood: SetModalInfoFoodProps;
  }
} 

export function RegisterFoodModal({ state }: RegisterFoodModalProps) {

  const {control, handleSubmit, setValue} = useForm<any>();
  const {addFood} = useMeal();

  const handleAddFoodInMeal = useCallback(async (food: Food) => {
    console.log(food)
  }, [])

  return (
    <View>
      <Modal 
        onBackdropPress={() => state.setModalRegisterFood(false)}
        isVisible={state.isVisible}
      >
        <ContainerModal>
            <Header>
              <TitleHeader>Cadastrar alimento</TitleHeader>
            </Header>
            <Form>
              <ContentForm>
                <WrapperInputDescription>
                  <InputDescription 
                    placeholder="Descrição"
                    autoCorrect={false} 
                  />
                </WrapperInputDescription>

                <WrapperInputsLine>
                  <GenericWrapperInput style={{width: 100}}>
                    <Input
                      title="Marca"
                      name="brand"
                      control={control}
                      placeholder="Digite aqui"
                      keyboardType="default"
                      autoCorrect={false}
                    />
                  </GenericWrapperInput>
                  <GenericWrapperInput style={{width: 120}}>
                    <PickerMetric
                      title="Métrica"
                      name="metric"
                      control={control}
                      enabled={true}
                      setValue={setValue}
                    />
                  </GenericWrapperInput>

                  <GenericWrapperInput style={{width: 100}}>
                    <Input
                      title="Porção"
                      name="amount"
                      control={control}
                      placeholder="Digite aqui"
                      keyboardType="numeric"
                      autoCorrect={false}
                    />
                  </GenericWrapperInput>

                </WrapperInputsLine>

                <InfoNutritional>
                  <InfoNutritionalText>
                    Informações nutricionais
                  </InfoNutritionalText>
                  <InfoNutritionalLine />
                </InfoNutritional>

                <WrapperInputsLine>
                  <GenericWrapperInput style={{width: 100}}>
                    <Input
                      title="Carbo"
                      name="cabos"
                      control={control}
                      placeholder="Digite aqui"
                      keyboardType="numeric"
                      autoCorrect={false}
                    />
                  </GenericWrapperInput>
                  <GenericWrapperInput style={{width: 120}}>
                    <Input
                      title="Proteína"
                      name="protein"
                      control={control}
                      placeholder="Digite aqui"
                      keyboardType="numeric"
                      autoCorrect={false}
                    />
                  </GenericWrapperInput>

                  <GenericWrapperInput style={{width: 100}}>
                    <Input
                      title="Gordura"
                      name="fat"
                      control={control}
                      placeholder="Digite aqui"
                      keyboardType="numeric"
                      autoCorrect={false}
                    />
                  </GenericWrapperInput>
                </WrapperInputsLine>


              </ContentForm>

              <Footer 
                handleSubmit={handleSubmit} 
                handleAddFoodInMeal={handleAddFoodInMeal} 
              />
            </Form>
        </ContainerModal>
      </Modal>
    </View>
  )
}