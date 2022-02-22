import React from 'react';
import { View } from 'react-native';
import { getHeightStatusBar } from '../../../commons/getHeightStatusBar';
import { Input } from '../../../components/Input';
import { 
  Container,
  Header,
  TitleHeader,
  Form,
  ButtonLogin,
  ButtonLoginText,
  ButtonSignUp,
  ButtonSignUpText,
  DescriptionHeader,
} from './styles';

export function Login() {
  const {STATUSBAR_HEIGHT} = getHeightStatusBar()
  return (
    <Container statusBarHeight={STATUSBAR_HEIGHT}>
      <Header>
        <TitleHeader>Bem-vindo</TitleHeader>
        <DescriptionHeader>
          Realize o login para continuar
        </DescriptionHeader>
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
            autoFocus
            value=""
            title="Senha"
            onChangeText={() => {}}
            placeholder="Digite seu senha aqui"
            keyboardType="numeric"
            autoCorrect={false}
            error={false}
          />
        </View>

        <ButtonLogin>
          <ButtonLoginText>Login</ButtonLoginText>
        </ButtonLogin>

        <ButtonSignUp>
          <ButtonSignUpText>Criar uma conta</ButtonSignUpText>
        </ButtonSignUp>
      </Form>
    </Container>
  )
}