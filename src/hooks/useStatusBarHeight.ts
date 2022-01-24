import {StatusBar} from 'react-native';

export function useStatusBarHeight(heightSize: number) {
  return StatusBar.currentHeight ? 
    (StatusBar.currentHeight+heightSize) 
    : 0;
}