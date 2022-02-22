import { useAnimationState } from "moti";

export const toggleAnimatedSelectedGenre = () => useAnimationState({
  man: {
    left: '0%',
  },
  woman: {  
    left: '50%',
  }
})