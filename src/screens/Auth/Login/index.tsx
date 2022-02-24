import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { getHeightStatusBar } from '../../../commons/getHeightStatusBar';
import { Input } from '../../../components/Form/Input';
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
import { useForm } from "react-hook-form";

export type FormLoginData = {
  email: string,
  password: string,
}

export function Login() {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm<any>();

  async function handleLogin(formData: FormLoginData) {
    console.log(formData)
  }

  return (
    <Container>
      <Header>
        <TitleHeader>Bem-vindo</TitleHeader>
        <DescriptionHeader>
          Realize o login para continuar
        </DescriptionHeader>
      </Header>

      <Form>
        <View style={{width: '100%', marginBottom: 30}}>
          <Input
            control={control}
            name="email"
            title="E-mail"
            placeholder="john@gmail.com"
            autoCorrect={false}
            keyboardType="email-address"
          /> 
        </View>

        <View style={{width: '100%', marginBottom: 50}}>
          <Input
            control={control}
            name="password"
            title="Senha"
            placeholder="Senha"
            secureTextEntry={true}
            autoCorrect={false}
          />
        </View>

        <ButtonLogin onPress={handleSubmit(handleLogin)}>
          <ButtonLoginText>Login</ButtonLoginText>
        </ButtonLogin>

        <ButtonSignUp 
          //@ts-ignore
          onPress={() => navigation.navigate({ name: 'Register'})}
        >
          <ButtonSignUpText>Criar uma conta</ButtonSignUpText>
        </ButtonSignUp>
      </Form>
    </Container>
  )
}