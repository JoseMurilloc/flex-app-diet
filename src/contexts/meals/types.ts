import { ReactNode } from "react";

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
  idMeal: OptionsMeal | null;
}

export type FoodData = Food[]

export interface MealProviderProps {
  children: ReactNode;
}

type Data = {
  foods: FoodData;
  meal: MealData;
}
export interface MealContextData {
  data: Data;
  addFood: (food: Food) => Promise<void>;
  removeAllFoodsOfMeal: () => void;
  addKeyMeal: (idMeal: OptionsMeal) => void;
}