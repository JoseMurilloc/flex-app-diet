import React, { useCallback, useState, useRef, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import Modal from "react-native-modal";
import { PickerMetric } from '../../Modal/Picker';
import {
  ContainerModal,
  Header,
  TitleHeader,
  Form,
  GenericWrapperInput,
  WrapperInputsLine,
  ContentForm,
  WrapperInputDescription,
  InfoNutritional,
  InfoNutritionalText,
  InfoNutritionalLine,
  Footer,
  FooterButtons,
  FooterButtonCancel,
  FooterButtonCancelText
} from './styles';
import { FormRegisterData, RegisterFoodModalProps } from './type';
import { Input } from '../../Modal/Input';
import { useToast } from '../../../contexts/toast';

import firestore from '@react-native-firebase/firestore'
import { InputDescription } from '../../Form/Input/InputDescription';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validation';
import { ErrorMessage } from '../../ErrorMessage';
import { Button } from '../../Button';

export function RegisterFoodModal({ state }: RegisterFoodModalProps) {

  const {control, handleSubmit, setValue, reset, formState: { errors }} = useForm<any>({
    resolver: yupResolver(schema)
  });
  
  
  const nameFoodInputRef = useRef<any>(null)
  const nameBrandInputRef = useRef<any>(null)
  const servingSizeInputRef = useRef<any>()
  const numberServingInputRef = useRef<any>()
  const carbsInputRef = useRef<any>()
  const proteinInputRef = useRef<any>()
  const fatInputRef = useRef<any>()


  const {showToast} = useToast()

  const handleConfirmRegisterFood = useCallback(async(data: FormRegisterData) => {

    console.log("Vamos isso passou pela verificação")
    
    const {cabos, protein, fat, nameBrand, nameFood} = data;

    let food = {
      nameFood,
      nameBrand,
      infoNutritional: {
        servingSize: data.servingSize,
        numberServing: data.numberServing,
        carbs: cabos,
        protein,
        fat
      }
    }
    
    firestore()
      .collection('foods')
      .add({
        ...food,
        created_at: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        showToast("success", "Alimento cadastrado com sucesso 👏")
      })
      .catch(() => {
        showToast('error', 'Error interno tente novamente por favor 😅');
      })
      .finally(() => {
        state.setModalRegisterFood(false);
        reset();
      })
     
  }, [])

  useEffect(() => {
    if (!state.isVisible) reset()
  }, [state.isVisible])

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
                    errors={errors.nameFood}
                    ref={nameFoodInputRef}
                    control={control} 
                    name="nameFood"
                    placeholder="Descrição"
                    autoCorrect={false} 
                    onSubmitEditing={() => 
                      nameBrandInputRef.current?.focusNextInput()
                    }
                  />
                   <ErrorMessage text={errors.nameFood?.message} />
                </WrapperInputDescription>

                <WrapperInputsLine>
                  <GenericWrapperInput style={{width: 100}}>
                    <Input
                      errors={errors.nameBrand}
                      ref={nameBrandInputRef}
                      title="Marca"
                      name="nameBrand"
                      control={control}
                      placeholder="Digite aqui"
                      keyboardType="default"
                      autoCorrect={false}
                      onSubmitEditing={() => 
                        numberServingInputRef.current?.focusNextInput()
                      }
                    />
                    <ErrorMessage text={errors.nameBrand?.message} />
                  </GenericWrapperInput>
                  <GenericWrapperInput style={{width: 120}}>
                    <PickerMetric
                      title="Métrica"
                      name="servingSize"
                      control={control}
                      enabled={true}
                      onValueChange={((itemValue: any, itemIndex: number) => {
                        setValue("servingSize", itemValue)
                      })}
                    />
                  </GenericWrapperInput>

                  <GenericWrapperInput style={{width: 100}}>
                    <Input
                      errors={errors.numberServing}   
                      ref={numberServingInputRef}
                      title="Porção"
                      name="numberServing"
                      control={control}
                      placeholder="Digite aqui"
                      keyboardType="numeric"
                      autoCorrect={false}
                      onSubmitEditing={() => 
                        carbsInputRef.current?.focusNextInput()
                      }
                    />
                     <ErrorMessage text={errors.numberServing?.message} />
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
                      errors={errors.cabos}
                      ref={carbsInputRef}
                      title="Carbo"
                      name="cabos"
                      control={control}
                      placeholder="Digite aqui"
                      keyboardType="numeric"
                      autoCorrect={false}
                      onSubmitEditing={() => 
                        proteinInputRef.current?.focusNextInput()
                      }
                    />
                     <ErrorMessage text={errors.cabos?.message} />
                  </GenericWrapperInput>
                  <GenericWrapperInput style={{width: 120}}>
                    <Input
                      errors={errors.protein}
                      ref={proteinInputRef}
                      title="Proteína"
                      name="protein"
                      control={control}
                      placeholder="Digite aqui"
                      keyboardType="numeric"
                      autoCorrect={false}
                      onSubmitEditing={() => 
                        fatInputRef.current?.focusNextInput()
                      }
                    />
                     <ErrorMessage text={errors.protein?.message} />
                  </GenericWrapperInput>

                  <GenericWrapperInput style={{width: 100}}>
                    <Input
                      errors={errors.fat}
                      ref={fatInputRef}
                      title="Gordura"
                      name="fat"
                      control={control}
                      placeholder="Digite aqui"
                      keyboardType="numeric"
                      autoCorrect={false}
                      onSubmitEditing={handleSubmit(handleConfirmRegisterFood)}
                    />
                    <ErrorMessage text={errors.fat?.message}/>
                  </GenericWrapperInput>
                </WrapperInputsLine>
              </ContentForm>

              <Footer>
                <FooterButtons>
                  <FooterButtonCancel 
                    onPress={() => state.setModalRegisterFood(false)}
                  >
                    <FooterButtonCancelText>
                      Cancelar
                    </FooterButtonCancelText>
                  </FooterButtonCancel>
                  <Button
                    onPress={handleSubmit(handleConfirmRegisterFood)}
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