import { TouchableOpacityProps } from "react-native"
import { OptionsMeal } from "../../contexts/meals/types";

export type SetModalInfoFoodProps = React.Dispatch<React.SetStateAction<boolean>>

export type Food = {
  id: number;
  nameFood: string;
  infoNutritional: { 
    servingSize: string,
    numberServing: number,
    carbs: number,
    protein: number,
    fat: number
  }
}

export type ParamsRouter = {
  idMeal: OptionsMeal;
}

export interface ButtonFunctionalityProps extends TouchableOpacityProps {
  type: "barCode" | "plus" | "dish";
}

export interface FormData {
  search: string;
}