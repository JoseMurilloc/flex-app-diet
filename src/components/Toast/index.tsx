import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useToast } from '../../contexts/toast';
import { Container, Message } from './styles';


export function Toast() {

  const {toastAnimationState, message, status} = useToast();

  useEffect(() =>{
    toastAnimationState.transitionTo('invisible');
  }, [])


  function ZIndex(val: number) {
    return Platform.select({
      ios: { zIndex: val },
      android: { elevation: val }
    })
  }


  return (
    <Container
      style={{...ZIndex(100)}} 
      status={status} 
      state={toastAnimationState}
    >
      <TouchableWithoutFeedback>
        <Message status={status}>{message}</Message>
      </TouchableWithoutFeedback>
    </Container>
  );
}
