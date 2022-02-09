import { useAnimationState } from 'moti';
import React, { useCallback, useContext, useState } from 'react';
import { createContext } from 'react';
import { Status, ToastContextData } from './types';

const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
);



export function ToastProvider({ children }: any) {

  const [status, setStatus] = useState<Status>("default");
  const [message, setMessage] = useState("Mensagem default");

  const toastAnimationState = useAnimationState({
    invisible: { opacity: 0, bottom: -50 },
    show: { opacity: 1, bottom: 55 },
  })

  const showToast = useCallback((status: Status, message: string) => {
    toastAnimationState.transitionTo('show');
    setStatus(status)
    setMessage(message)

    setTimeout(() => {
      toastAnimationState.transitionTo('invisible');
    }, 5000)
  }, [])

  return (
    <ToastContext.Provider value={{ 
      status, 
      toastAnimationState, 
      message,
      showToast
    }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  return context;
}