import { UseFormHandleSubmit } from 'react-hook-form';
import { Food } from '../../../contexts/meals/types';
import { FormData } from '../../InfoFoodModal/types';

export type FooterProps = {
  handleSubmit:  UseFormHandleSubmit<any>;
  handleAddFoodInMeal?: (food: Food) => Promise<void>;
  handleConfirmMeal?:  (data: FormData) => Promise<void>
}