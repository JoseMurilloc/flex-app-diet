import React from 'react';
import { View } from 'react-native';
import { getHeightStatusBar } from '../../../commons/getHeightStatusBar';
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
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components/native';

type FormRegisterUser = {
  confirmationPassword: string;
  email: string;
  password: string;
}

export function Register() {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm()

  const themes = useTheme(); 

  const onSubmitRegisterUser = (formData: FormRegisterUser) => {
    console.log(formData)
    //@ts-ignore
    navigation.navigate({ name: "AboutYou"})
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
        <View style={{width: '100%', marginBottom: 30}}>
          <Input
            title="E-mail"
            placeholder="john@gmail.com"
            autoCorrect={false}
            control={control}
            name="email"
            keyboardType="email-address"
          /> 
        </View>

        <View style={{width: '100%', marginBottom: 30}}>
          <Input
            title="Senha"
            name="password"
            secureTextEntry={true}
            placeholder="Digite seu senha aqui"
            autoCorrect={false}
            control={control}
          />
        </View>

        <View style={{width: '100%'}}>
          <Input
            title="Confirmação de senha"
            name="confirmationPassword"
            secureTextEntry={true}
            placeholder="Digite seu senha aqui"
            autoCorrect={false}
            control={control}
          />
        </View>



        <ButtonContinue 
          //@ts-ignore
          onPress={handleSubmit(onSubmitRegisterUser)}
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