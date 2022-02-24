import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Initial } from '../screens/Auth/Initial';
import { Login } from '../screens/Auth/Login';
import { Register } from '../screens/Auth/Register';
import { AboutYou } from '../screens/Auth/AboutYou';


const Stack = createNativeStackNavigator();


export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Aligned Center',
        headerTitleAlign: 'center',
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="Initial" 
        component={Initial} 
      />
      <Stack.Screen 
        name="Login" 
        component={Login}
      />
      <Stack.Screen 
        name="Register"
        component={Register}
      />

      <Stack.Screen 
        name="AboutYou" 
        component={AboutYou}
      />
    </Stack.Navigator>
  )
}