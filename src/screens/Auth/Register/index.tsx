import React from 'react';
import { View } from 'react-native';
import { getHeightStatusBar } from '../../../commons/getHeightStatusBar';
import { Input } from '../../../components/Input';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { 
  Container,
  Header,
  TitleHeader,
  Form,
  ButtonContinue,
  ButtonContinueText,
  ButtonBack,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function Register() {
  const navigation = useNavigation();

  const {STATUSBAR_HEIGHT} = getHeightStatusBar()
  return (
    <Container statusBarHeight={STATUSBAR_HEIGHT}>
      <Header>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Ionicons 
            name="chevron-back" 
            size={25}
            color="#1D115C"
          />
        </ButtonBack>
        <TitleHeader>Crie sua conta</TitleHeader>
      </Header>

      <Form>
        <View style={{width: '100%', marginBottom: 30}}>
          <Input
            value=""
            title="E-mail"
            onChangeText={() => {}}
            placeholder="john@gmail.com"
            autoCorrect={false}
            error={false}
          /> 
        </View>

        <View style={{width: '100%', marginBottom: 50}}>
          <Input
            value=""
            title="Senha"
            onChangeText={() => {}}
            placeholder="Digite seu senha aqui"
            autoCorrect={false}
            error={false}
          />
        </View>

        <ButtonContinue 
          onPress={() => navigation.navigate({ name: 'AboutYou'})}
        >
          <ButtonContinueText>Continuar</ButtonContinueText>
          <FontAwesome5 
            name="long-arrow-alt-right" 
            size={24} 
            color="#FFF" 
          />        
        </ButtonContinue>
      </Form>
    </Container>
  )
}