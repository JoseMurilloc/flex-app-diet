import { UseFormHandleSubmit } from 'react-hook-form';
import { SetModalInfoFoodProps } from '../../../screens/MountDish/types';
import { FormRegisterData } from '../../RegisterFoodModal/type';

export type FooterProps = {
  handleSubmit:  UseFormHandleSubmit<any>;
  handleAddFoodInMeal?: (food: any) => Promise<void>;
  handleConfirmRegisterFood?:  (data: any) => Promise<void>;
  setModalInfoFood: SetModalInfoFoodProps;
}