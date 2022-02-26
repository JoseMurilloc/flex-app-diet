export type FoodDTO = {
  nameFood: string;
  nameBrand: string;
  infoNutritional: {
    servingSize: ServingSize | string;
    numberServing: number;
    carbs: number;
    protein: number;
    fat: number;
  },
  created_at: Date;
}

type ServingSize = ["unit", "gram", "spoon", "ml"]