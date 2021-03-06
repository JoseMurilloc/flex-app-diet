import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from '../../../components/Form/Input';
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
  ErrorMessage
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components/native';

import auth from '@react-native-firebase/auth';
import { useToast } from '../../../contexts/toast';
import AppLoading from 'expo-app-loading';
import { schemaOfRegister } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';



type FormRegisterUser = {
  confirmationPassword: string;
  email: string;
  password: string;
}

export function Register() {
  const navigation = useNavigation();
  const {control, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schemaOfRegister)
  })
  const { showToast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const themes = useTheme(); 

  const onSubmitRegisterUser = (formData: FormRegisterUser) => {
    const { email, password} = formData;

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => showToast('success', 'Conta criada com sucesso'))
      //@ts-ignore
      .then(() => navigation.navigate({ name: "AboutYou"}))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  };

  return (
    <Container>
      <Header>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Ionicons 
            name="chevron-back" 
            size={25}
            color={themes.colors.primary}
          />
        </ButtonBack>
        <TitleHeader>Crie sua conta</TitleHeader>
      </Header>

      <Form>
        <View style={{width: '100%'}}>
          <Input
            errors={errors.email}
            title="E-mail"
            nameIcon="mail"
            placeholder="john@gmail.com"
            autoCorrect={false}
            control={control}
            name="email"
            keyboardType="email-address"
          /> 
           <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </View>

        <View style={{width: '100%'}}>
          <Input
            errors={errors.password}
            nameIcon="lock"
            title="Senha"
            name="password"
            secureTextEntry={true}
            placeholder="Digite seu senha aqui"
            autoCorrect={false}
            control={control}
          />
           <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </View>

        <View style={{width: '100%'}}>
          <Input
            errors={errors.confirmationPassword}
            nameIcon="lock"
            title="Confirma????o de senha"
            name="confirmationPassword"
            secureTextEntry={true}
            placeholder="Digite seu senha aqui"
            autoCorrect={false}
            control={control}
          />
          <ErrorMessage>{errors.confirmationPassword?.message}</ErrorMessage>
        </View>



        <ButtonContinue 
          //@ts-ignore
          onPress={handleSubmit(onSubmitRegisterUser)}
          disabled={isLoading}
        >
          {isLoading ? (
            <AppLoading />
          ) : (
            <>
              <ButtonContinueText>Continuar</ButtonContinueText>
              <FontAwesome5 
                name="long-arrow-alt-right" 
                size={24} 
                color="#FFF" 
              />        
            </>
            )}
          </ButtonContinue>
      </Form>
    </Container>
  )
}