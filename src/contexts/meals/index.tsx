import React, { useCallback, useContext, useState } from 'react';
import { createContext } from "react";
import { CartProviderProps, Data, Food, MealContextData, OptionsMeal } from "./types";

const MealContext = createContext<MealContextData>({} as MealContextData);


export function MealProvider({ children }: CartProviderProps) {
  const [data, setData] = useState<Data>(() => {
    return { foods: [], idMeal: null}
  });

  const addKeyMeal = useCallback((idMeal: OptionsMeal) => {
    setData({foods: [...data.foods], idMeal })
  }, [])
  
  const addFood =  useCallback(async(foodId: number) => {
    console.log(`🤪 add Food`)
  }, []);

  const removeFood =  useCallback((foodId: number) => {
    console.log(`🤪 remove Food`)
  }, []);


  return (
    <MealContext.Provider value={{data, addFood, removeFood, addKeyMeal}}>
      {children}
    </MealContext.Provider>
  )
}

export function useMeal(): MealContextData {
  const context = useContext(MealContext);

  return context;
}