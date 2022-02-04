import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Modal from "react-native-modal";
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
import { FormRegisterData, RegisterFoodModalProps } from './type';
import { api } from '../../services/api';
import { getTotalCaloriesInMacros } from '../../commons/getTotalCaloriesInMacros';


export function RegisterFoodModal({ state }: RegisterFoodModalProps) {

  const {control, handleSubmit, setValue} = useForm<any>();

  const handleConfirmRegisterFood = useCallback(
    async(data: FormRegisterData) => {
    
    const {cabos, protein, fat} = data;
    const caloriesTotalFood = getTotalCaloriesInMacros({
      cabos,
      protein,
      fat
    });

    const food = {
      nameFood: data.description,
      gram: data.numberServing,
      caloriesTotalFood,
      infoNutritional: {
        servingSize: data.metric,
        numberServing: data.numberServing,
        carbs: cabos,
        protein,
        fat
      }
    }

    try {
      await api.post('/foods', { ...food })
      state.setModalRegisterFood(false);
    } catch {
      console.log(`Error API`);
    }
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
                <Controller
                  control={control}
                  name="description"
                  render={({ field: { onChange, value }}) => (
                    <InputDescription 
                      placeholder="Descrição"
                      autoCorrect={false} 
                      value={value}
                      onChangeText={onChange}
                   />
                  )}
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
                      onValueChange={((itemValue: any, itemIndex: number) => {
                        setValue("metric", itemValue)
                      })}
                    />
                  </GenericWrapperInput>

                  <GenericWrapperInput style={{width: 100}}>
                    <Input
                      title="Porção"
                      name="numberServing"
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
                handleConfirmRegisterFood={handleConfirmRegisterFood}
                setModalInfoFood={state.setModalRegisterFood} 
              />
            </Form>
        </ContainerModal>
      </Modal>
    </View>
  )
}