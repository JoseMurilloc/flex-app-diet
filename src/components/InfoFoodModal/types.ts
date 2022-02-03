import { Food } from "../../contexts/meals/types"

export type FormData = {
  amount: number;
  metric: string;
}

export type InfoFoodModalProps = {
  state: {
    isVisible: boolean;
    setModalInfoFood: SetModalInfoFoodProps;
  }
  food: Food;
} 
