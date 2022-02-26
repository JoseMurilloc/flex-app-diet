export type MealDTO = {
  type: string;
  nameMeal: string;
  caloriesTotal: number;
  foods: {
    amountServing: number;
    food: any;
  }
}