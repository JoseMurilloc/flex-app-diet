import { SetModalInfoFoodProps } from '../../../screens/MountDish/types';


export type RegisterFoodModalProps = {
  state: {
    isVisible: boolean;
    setModalRegisterFood: SetModalInfoFoodProps;
  },
} 

export type FormRegisterData = {
  numberServing: number,
  description: string,
  nameBrand: string,
  cabos: number,
  fat: number,
  servingSize: string,
  metric: string,
  protein: number,
}