import React, { useCallback, useContext, useState } from 'react';
import { createContext } from "react";
import {
  CartProviderProps,
  Food,
  FoodData,
  MealContextData,
  MealData,
  OptionsMeal
} from "./types";

const MealContext = createContext<MealContextData>({} as MealContextData);


export function MealProvider({ children }: CartProviderProps) {
  const [meal, setMeal] = useState<MealData>(() => ({idMeal: null}));
  const [foods, setFoods] = useState<FoodData>([]);

  const addKeyMeal = useCallback((idMeal: OptionsMeal) => {
    setMeal({ idMeal })
  }, [])
  
  const addFood =  useCallback(async(food: Food) => {
    console.log(`🔺 add Food ${food.nameFood}`)
    setFoods([...foods, food])
  }, [foods]);

  const removeFood =  useCallback((foodId: number) => {
    console.log(`🔻 remove Food ${foodId}`)
  }, []);


  return (
    <MealContext.Provider value={{data: {foods, meal}, addFood, removeFood, addKeyMeal}}>
      {children}
    </MealContext.Provider>
  )
}

export function useMeal(): MealContextData {
  const context = useContext(MealContext);

  return context;
}