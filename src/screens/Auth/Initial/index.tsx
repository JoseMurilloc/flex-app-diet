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

export function Initial() {
  const {STATUSBAR_HEIGHT} = getHeightStatusBar()

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

          <ButtonLogin>
            <ButtonLoginText>Login</ButtonLoginText>
          </ButtonLogin>

          <ButtonSignUp>
            <ButtonSignUpText>Cadastrar-se</ButtonSignUpText>
          </ButtonSignUp>
        </Form>
      </Container>  
    </>
  )
}