export type MealDTO = {
  type: string;
  nameMeal: string;
  caloriesTotal: number;
  foods: Array<{
    amountServing: number;
    food: any;
  }>
}