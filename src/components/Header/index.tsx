import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { 
  Container,
  ButtonBack,
  TitleHeader,
  WrapperTitleHeader
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { getHeightStatusBar } from '../../commons/getHeightStatusBar';
import { StatusBar } from 'expo-status-bar';
import theme from '../../global/styles/theme';
import { useMeal } from '../../contexts/meals';
import { Alert } from 'react-native';

type HeaderProps = {
  titleHeader: string;
}

export function Header({titleHeader}: HeaderProps) {
  const navigation = useNavigation();
  const {STATUSBAR_HEIGHT} = getHeightStatusBar()

  const {data: {foods}, removeAllFoodsOfMeal} = useMeal();


  const alertUnmountDish = () => Alert.alert(
    'Descartar prato',
    'Tem comida no prato seu arrombado vai estruir?',
    [
      {
        text: 'Não', 
        style: 'cancel', 
        onPress: () => {}
      },
      {
        text: 'Sim',
        style: 'destructive',
        onPress: () => {
          removeAllFoodsOfMeal();
          navigation.goBack();
        },
      },
    ],
  )


  function handleBackStack() {
    if (titleHeader === 'Montar prato') {
      alertUnmountDish();
    } else {
      navigation.goBack()
    }
  }

  return (
    <>
      <StatusBar style="light" backgroundColor={theme.colors.primary} />
      <Container statusBarSize={STATUSBAR_HEIGHT}>
        <ButtonBack onPress={handleBackStack}>
          <Ionicons 
            name="chevron-back" 
            size={25}
            color="#FFF"
          />
        </ButtonBack>
        
        <WrapperTitleHeader>
          <TitleHeader>
            {titleHeader}
          </TitleHeader>
        </WrapperTitleHeader>
      </Container>
    </>
  )
}