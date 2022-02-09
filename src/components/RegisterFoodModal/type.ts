import { Food, SetModalInfoFoodProps } from '../../screens/MountDish/types';


export type RegisterFoodModalProps = {
  state: {
    isVisible: boolean;
    setModalRegisterFood: SetModalInfoFoodProps;
  },
} 

export type FormRegisterData = {
  numberServing: number,
  description: string,
  brand: string,
  cabos: number,
  fat: number,
  metric: string,
  protein: number,
}