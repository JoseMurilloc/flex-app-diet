import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AppProvider } from './src/contexts';
import { AppRoutes } from './src/routes/appRoutes';
import { Toast } from './src/components/Toast';


export default function App() {
  return (
    <AppProvider>
      <StatusBar style="auto" />
      <Toast />
      <AppRoutes />
    </AppProvider>
  );
}

