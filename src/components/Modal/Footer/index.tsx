import React from 'react';
import { Button } from '../../Button';
import { 
  ButtonCancel,
  ButtonCancelText,
  Container,
  ContainerButtons
} from './styles';
import { FooterProps } from './types';


// Discursion if really necessary it's component case not implement footer to around modal
export function Footer({ 
  handleSubmit, 
  handleAddFoodInMeal,
  handleConfirmRegisterFood,
  setModalInfoFood
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
            onPress={handleSubmit(handleConfirmRegisterFood)}
            buttonText="Cadastrar" 
          />
        )}

        {handleAddFoodInMeal && (
          <Button
            onPress={handleSubmit(handleAddFoodInMeal)}
            buttonText="Adicionar" 
          />
        )}
      </ContainerButtons>
    </Container>
  ); 
}