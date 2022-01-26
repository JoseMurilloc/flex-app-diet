import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppProvider } from './src/contexts';
import { AppRoutes } from './src/routes/appRoutes';


export default function App() {
  return (
    <AppProvider>
      <StatusBar style="auto" />
      <AppRoutes />
    </AppProvider>
  );
}

