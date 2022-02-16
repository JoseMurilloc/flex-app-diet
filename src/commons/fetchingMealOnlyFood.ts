import { iconsMeals } from "../constants/meals";
import { Meal } from "../screens/Home/types";
import { api } from "../services/api";

export async function fetchingMealOnlyFood(): Promise<Array<Meal>> {

  try {
    const {data} = await api.get('/meals')
    const dataFormatted = 
      data.filter((meal: Meal) => meal.foods.length > 0)
      .map((meal: Meal) => ({...meal,
        Icon: iconsMeals.filter(icons => icons[meal.id])[0][meal.id]
      }))

      return dataFormatted
  } catch {
    console.log("Error of fetching")
  }

  return []

}
