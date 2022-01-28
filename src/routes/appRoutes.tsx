import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { MountDish } from '../screens/MountDish';
import theme from '../global/styles/theme';
import { MyDish } from '../screens/MyDish';

export type RootStackParamList = {
  Home: undefined;
  MountDish: undefined;
  MyDish: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();


export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Aligned Center',
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="MountDish" 
        component={MountDish}
        options={{ 
          title: "Montar prato",
          headerTintColor: '#FFF',
          headerTitleStyle: { 
            fontFamily: theme.fonts.bold,
            fontSize: theme.sizes.large,
            fontWeight: '700'
          },
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      />
      <Stack.Screen 
        name="MyDish" 
        component={MyDish}
        options={{ 
          title: "Meu prato",
          headerTintColor: '#FFF',
          headerTitleStyle: { 
            fontFamily: theme.fonts.bold,
            fontSize: theme.sizes.large,
            fontWeight: '700'
          },
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      />
    </Stack.Navigator>
  )
}