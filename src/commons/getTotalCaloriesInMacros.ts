import { macrosGramForCalories } from "../constants/macrosCalories"

type MacrosParams = {
  protein: number;
  cabos: number;
  fat: number;
}

export function getTotalCaloriesInMacros({
  cabos, protein, fat
}: MacrosParams) {
  return (
    (cabos*macrosGramForCalories.CABOS) 
    + (protein*macrosGramForCalories.PROTEIN) 
    + (fat*macrosGramForCalories.FAT)
  )
}