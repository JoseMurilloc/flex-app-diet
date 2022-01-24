import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { AppProvider } from './src/contexts';


export default function App() {
  return (
    <AppProvider>
      <StatusBar style="auto" />
      <Home />
    </AppProvider>
  );
}

