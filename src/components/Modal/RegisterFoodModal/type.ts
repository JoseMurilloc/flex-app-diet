import { SetModalInfoFoodProps } from '../../../screens/MountDish/types';


export type RegisterFoodModalProps = {
  state: {
    isVisible: boolean;
    setModalRegisterFood: SetModalInfoFoodProps;
  },
} 

export type FormRegisterData = {
  numberServing: number,
  nameFood: string,
  nameBrand: string,
  cabos: number,
  fat: number,
  servingSize: string,
  protein: number,
}