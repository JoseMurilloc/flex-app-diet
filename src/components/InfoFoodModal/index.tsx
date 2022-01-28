import React from 'react';
import { View } from 'react-native';
import Modal from "react-native-modal";
import { Food, SetModalInfoFoodProps } from '../../screens/MountDish/types';
import { 
  ContainerModal,
  Header,
  TitleHeader,
} from './styles';

type InfoFoodModalProps = {
  state: {
    isVisible: boolean;
    setModalInfoFood: SetModalInfoFoodProps;
  }
  food: Food;
} 

export function InfoFoodModal({ state, food }: InfoFoodModalProps) {
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
        </ContainerModal>
      </Modal>
    </View>
  )
}