import { useAnimationState } from "moti";

export const toggleAnimatedMenuMealState = useAnimationState({
  closed: {
    bottom: -261,
  },
  open: {  
    bottom: 0,
  }
})