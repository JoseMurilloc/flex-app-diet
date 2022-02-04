import React from 'react';
import { Button } from '../../Button';
import { 
  ButtonCancel,
  ButtonCancelText,
  Container,
  ContainerButtons
} from './styles';
import { FooterProps } from './types';

export function Footer({ 
  handleSubmit, handleAddFoodInMeal, handleConfirmRegisterFood, setModalInfoFood
}: FooterProps) {
  return (
    <Container>
      <ContainerButtons>
        <ButtonCancel onPress={() => setModalInfoFood(false)}>
          <ButtonCancelText>
            Cancelar
          </ButtonCancelText>
        </ButtonCancel>
        {handleConfirmRegisterFood && (
          <Button
            onPress={handleConfirmRegisterFood}
            buttonText="Adicionar" 
          />
        )}

        {handleAddFoodInMeal && (
          <Button
            onPress={handleAddFoodInMeal}
            buttonText="Adicionar" 
          />
        )}
      </ContainerButtons>
    </Container>
  ); 
}