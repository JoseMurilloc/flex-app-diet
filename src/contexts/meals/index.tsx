import React, { useCallback, useContext, useEffect, useState } from 'react';
import { createContext } from "react";
import { Meal } from '../../screens/Home/types';
import {
  Food,
  MealContextData,
  MealData,
  MealProviderProps,
  OptionsMeal
} from "./types";

import firestore from "@react-native-firebase/firestore";
import { MealDTO } from '../../dtos/MealDTO';
import { typesMealToName } from '../../commons/typesMealToName';
import { useToast } from '../toast';
import { useNavigation } from '@react-navigation/native';

const MealContext = createContext<MealContextData>({} as MealContextData);


export function MealProvider({ children }: MealProviderProps) {

  const navigation = useNavigation()

  const [meal, setMeal] = useState<MealData>(() => ({type: null}));
  const [meals, setMeals] = useState<MealDTO[]>(() => []);
  const [dish, setDish] = useState<Food[]>([]);

  const {showToast} = useToast()


  async function handleLoadAllMeal() {
    firestore()
      .collection('meals')
      .get()
      .then(querySnapshot => 
        querySnapshot.docs.map(doc => {
          return {...doc.data(), id: doc.id } as MealDTO
        })
      )
      .then(mealsResponse => setMeals(mealsResponse))     
      .catch(err => console.log(err))
  }

  const updatedMeals = async(id: string) => {
    
    const queryNewMeal = await 
      firestore().collection('meals').doc(id).get()

    const newMeal : any = {
      id: queryNewMeal.id,
      ...queryNewMeal.data()
    }

    const mealsUpdate = meals.filter(meal => meal.id !== id)
    setMeals([...meals, newMeal])
  }

  const removedMeals = async(id: string) => {
    const mealsUpdate = meals.filter(meal => meal.id !== id)
    setMeals(mealsUpdate)
  }

  


  
  async function handleSubmitMeal(caloriesTotal: string): Promise<void> {
    if (!meal.type) return;

    
    const formData = {
      type: meal.type,
      nameMeal: typesMealToName[meal.type],
      caloriesTotal,
      foods: dish,
      created_at: firestore.FieldValue.serverTimestamp()
    }
      
    
    try {
      const querySnapshot = await firestore()
        .collection('meals')
        .add(formData)

      updatedMeals(querySnapshot.id)
      console.log(querySnapshot)

      showToast("success", "Refeição cadastrada com sucesso")

      removeAllFoodsOfDish()
      //@ts-ignore
      navigation.navigate({ name: "Home"})

    } catch(err) {
      showToast("error", "Aconteceu um problema, por favor tente novamente")

      console.log(err)
    }
  }

  const updatedTypeOfMeal = useCallback((type: OptionsMeal) => {
    setMeal({ type })
  }, [])
  
  const addFoodInDish =  useCallback(async(food: Food) => {
    setDish([...dish, food])
  }, [dish]);

  const removeAllFoodsOfDish =  useCallback(() => {
    setDish([])
  }, []);

  async function handleDeleteMeal(id: string) {
    firestore()
      .collection("meals")
      .doc(id)
      .delete()
      .catch(() => {
        showToast('error', 'Error no servidor, tente novamente 😅')
      });
  }


  return (
    <MealContext.Provider value={{
      data: {dish, meal, meals}, 
      addFoodInDish, 
      removeAllFoodsOfDish, 
      updatedTypeOfMeal,
      handleLoadAllMeal,
      handleSubmitMeal,
      updatedMeals,
      handleDeleteMeal,
      removedMeals
    }}>
      {children}
    </MealContext.Provider>
  )
}

export function useMeal(): MealContextData {
  const context = useContext(MealContext);

  return context;
}