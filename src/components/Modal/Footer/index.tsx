import React from 'react';
import { Button } from '../../Button';
import { ButtonCancel, ButtonCancelText, Container, ContainerButtons } from './styles';
import { FooterProps } from './types';

export function Footer({ 
  handleSubmit, handleAddFoodInMeal, handleConfirmMeal, setModalInfoFood
}: FooterProps) {
  return (
    <Container>
      <ContainerButtons>
        <ButtonCancel
          onPress={() => setModalInfoFood(false)}
        >
          <ButtonCancelText>
            Cancelar
          </ButtonCancelText>
        </ButtonCancel>
        <Button
          onPress={
            handleAddFoodInMeal && handleSubmit(handleAddFoodInMeal) ||
            handleConfirmMeal && handleSubmit(handleConfirmMeal)      
          }
          buttonText="Adicionar" 
        />
      </ContainerButtons>
    </Container>
  ); 
}