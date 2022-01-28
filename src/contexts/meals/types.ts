import { ReactNode } from "react";

export type OptionsMeal = "breakfast" | "morningSpeedboat" | "lunch" | "afternoonSnack" | "dinner"

export interface Food {
  id: number;
  nameFood: string;
  gram: number;
  caloriesTotalFood: number;
}

export interface Data {
  foods: Food[],
  idMeal: OptionsMeal | null;
}

export interface CartProviderProps {
  children: ReactNode;
}

export interface MealContextData {
  data: Data;
  addFood: (foodId: number) => Promise<void>;
  removeFood: (foodId: number) => void;
  addKeyMeal: (idMeal: OptionsMeal) => void;
}