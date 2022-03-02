import { ReactNode } from "react";
import { MealDTO } from "../../dtos/MealDTO";

export type OptionsMeal = "breakfast" | "morningSpeedboat" | "lunch" | "afternoonSnack" | "dinner"

export interface Food {
  id: number;
  nameFood: string;
  amount: number;
  infoNutritional: { 
    servingSize: string,
    numberServing: number,
    carbs: number,
    protein: number,
    fat: number
  }
}

export interface MealData {
  type: OptionsMeal | null;
}


export interface MealProviderProps {
  children: ReactNode;
}

type Data = {
  dish: Food[];
  meal: MealData;
  meals: MealDTO[]
}
export interface MealContextData {
  data: Data;
  addFoodInDish: (food: Food) => Promise<void>;
  removeAllFoodsOfDish: () => void;
  updatedTypeOfMeal: (type: OptionsMeal) => void;
  handleLoadAllMeal(): Promise<void>;
  handleSubmitMeal(caloriesTotal: string): Promise<void>;
  updatedMeals: (id: string) => void;
  removedMeals: (id: string) => void;
  handleDeleteMeal: (id: string) => Promise<void>;
}