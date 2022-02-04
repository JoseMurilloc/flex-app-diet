import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useFontRoboto } from '../hooks/useFontRoboto';
import AppLoading from 'expo-app-loading';

import theme from '../global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { MealProvider } from './meals';

export const AppProvider: React.FC = ({children}) => {
  const fontsLoaded = useFontRoboto();

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <MealProvider>
      <ThemeProvider theme={theme}>
          <NavigationContainer>
            {children}
          </NavigationContainer>
      </ThemeProvider>
    </MealProvider>
  )
}