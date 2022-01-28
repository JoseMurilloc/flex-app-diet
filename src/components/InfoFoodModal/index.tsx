import React from 'react';
import { Text, View } from 'react-native';
import Modal from "react-native-modal";
import { SetModalInfoFoodProps } from '../../screens/MountDish/types';
import { ContainerModal } from './styles';

type InfoFoodModalProps = {
  state: {
    isVisible: boolean;
    setModalInfoFood: SetModalInfoFoodProps;
  }
  foods?: {}
} 

export function InfoFoodModal({ state }: InfoFoodModalProps) {
  return (
    <View>
      <Modal 
        onBackdropPress={() => state.setModalInfoFood(false)}
        isVisible={state.isVisible}
      >
        <ContainerModal>
          <Text>I am the modal content!</Text>
        </ContainerModal>
      </Modal>
    </View>
  )
}