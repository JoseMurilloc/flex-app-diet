import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableOpacityProps } from "react-native"
import { OptionsMeal } from "../../contexts/meals/types";
import { RootStackParamList } from "../../routes/appRoutes";

export type MountDishProps = NativeStackNavigationProp<RootStackParamList, 'MountDish'>;

export type SetModalInfoFoodProps = React.Dispatch<React.SetStateAction<boolean>>

export type Food = {
  id: number;
  nameFood: string;
  gram: number;
  caloriesTotalFood: number;
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