import { Food, SetModalInfoFoodProps } from "../../../screens/MountDish/types"

export type FormInfoFoodData = {
  numberServing: number;
  metric: string;
}

export type InfoFoodModalProps = {
  state: {
    isVisible: boolean;
    setModalInfoFood: SetModalInfoFoodProps;
  }
  food: Food;
} 
