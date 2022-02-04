import { macrosGramForCalories } from "../constants/macrosCalories"

type MacrosParams = {
  protein: number;
  cabos: number;
  fat: number;
}

export function getTotalCaloriesInMacros({
  cabos, protein, fat
}: MacrosParams) {
  const carboCalorie = cabos * macrosGramForCalories.CABOS;
  const proteinCalorie = protein * macrosGramForCalories.PROTEIN;
  const fatCalorie = fat * macrosGramForCalories.FAT;
  const totalCalories = carboCalorie + proteinCalorie + fatCalorie;

  return totalCalories.toFixed(2)
}