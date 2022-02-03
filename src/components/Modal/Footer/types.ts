import { UseFormHandleSubmit } from 'react-hook-form';
import { FormRegisterData } from '../../RegisterFoodModal/type';

export type FooterProps = {
  handleSubmit:  UseFormHandleSubmit<any>;
  handleAddFoodInMeal?: (food: FormRegisterData) => Promise<void>;
  handleConfirmMeal?:  (data: any) => Promise<void>
}