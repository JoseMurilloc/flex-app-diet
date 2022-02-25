import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AppProvider } from './src/contexts';
import { AppRoutes } from './src/routes/appRoutes';
import { Toast } from './src/components/Toast';
import { AuthRoutes } from './src/routes/authRoutes';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'


export default function App() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(setUser)

    return subscribe
  }, [])


  return (
    <AppProvider>
      <StatusBar style="auto" />
      <Toast />
      {user ? <AppRoutes /> : <AuthRoutes />}
    </AppProvider>
  );
}

