import { Food } from "../contexts/meals/types";

export type MealDTO = {
  id: string;
  type: string;
  nameMeal: string;
  caloriesTotal: number;
  created_at: any;
  foods: Array<Food>
}