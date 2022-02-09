import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import Modal from "react-native-modal";
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
import { Input } from '../Modal/Input';
import { api } from '../../services/api';
import { useToast } from '../../contexts/toast';

export function RegisterFoodModal({ state }: RegisterFoodModalProps) {

  const {control, handleSubmit, setValue, reset} = useForm<any>();
  const [isFocused, setIsFocused] = useState(false);
  const {showToast} = useToast()

  const handleInputFocus = useCallback(() => setIsFocused(true), []);
  const handleInputBlur = useCallback(() => setIsFocused(false), []);

  const handleConfirmRegisterFood = useCallback(async(data: FormRegisterData) => {
    
    const {cabos, protein, fat} = data;

    const food = {
      nameFood: data.description,
      infoNutritional: {
        servingSize: data.metric,
        numberServing: data.numberServing,
        carbs: cabos,
        protein,
        fat
      }
    }

    try {
      await api.post('/foods', { ...food });
      showToast("success", "Alimento cadastrado com sucesso")
    } catch {
      showToast('error', 'Error interno tente novamente');
    } finally {
      state.setModalRegisterFood(false);
      reset();
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
                      isFocused={isFocused}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
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