import React, { useCallback, useContext, useState } from 'react';
import { createContext } from "react";
import {
  Food,
  FoodData,
  MealContextData,
  MealData,
  MealProviderProps,
  OptionsMeal
} from "./types";

const MealContext = createContext<MealContextData>({} as MealContextData);


export function MealProvider({ children }: MealProviderProps) {
  const [meal, setMeal] = useState<MealData>(() => ({idMeal: null}));
  const [foods, setFoods] = useState<FoodData>([]);

  const addKeyMeal = useCallback((idMeal: OptionsMeal) => {
    setMeal({ idMeal })
  }, [])
  
  const addFood =  useCallback(async(food: Food) => {
    setFoods([...foods, food])
  }, [foods]);

  const removeAllFoodsOfMeal =  useCallback(() => {
    setFoods([])
  }, []);


  return (
    <MealContext.Provider value={{data: {foods, meal}, addFood, removeAllFoodsOfMeal, addKeyMeal}}>
      {children}
    </MealContext.Provider>
  )
}

export function useMeal(): MealContextData {
  const context = useContext(MealContext);

  return context;
}