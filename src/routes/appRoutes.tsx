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
        headerTitleAlign: 'center',
        headerShown: false
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
      />
      <Stack.Screen 
        name="MountDish" 
        component={MountDish}
      />
      <Stack.Screen 
        name="MyDish" 
        component={MyDish}
      />
    </Stack.Navigator>
  )
}