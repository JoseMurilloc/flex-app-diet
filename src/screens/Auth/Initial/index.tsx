import React from "react";
import { StatusBar } from "expo-status-bar";
import { getHeightStatusBar } from "../../../commons/getHeightStatusBar";

import { 
  Container,
  Header,
  TitleHeader,
  Form,
  HeaderForm,
  Title,
  Description,
  ButtonLogin,
  ButtonLoginText, 
  ButtonSignUp,
  ButtonSignUpText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Initial() {
  const {STATUSBAR_HEIGHT} = getHeightStatusBar()
  const navigation = useNavigation();

  return (
    <>
      <StatusBar style="light" />
      <Container statusBarHeight={STATUSBAR_HEIGHT}>
        <Header>
          <TitleHeader>Diet Flex</TitleHeader>
        </Header>

        <Form>
          <HeaderForm>
            <Title>Diet Flex seu maior aliado 😋</Title>
            <Description>
              O seu maior aliado para controlar calorias chegou, foma de forma flexível 
            </Description>
          </HeaderForm>

          <ButtonLogin  
            //@ts-ignore
            onPress={() => navigation.navigate({ name: 'Login'})}
          >
            <ButtonLoginText>Login</ButtonLoginText>
          </ButtonLogin>

          <ButtonSignUp
            //@ts-ignore
            onPress={() => navigation.navigate({ name: 'Register'})}
          >
            <ButtonSignUpText>Cadastrar-se</ButtonSignUpText>
          </ButtonSignUp>
        </Form>
      </Container>  
    </>
  )
}